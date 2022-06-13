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

		const total = document.querySelector('.cart__result-sticke');

		form.addEventListener('change', event => {

			form.classList.add('is-loading');

			const counter = form.querySelectorAll('.cart__item').length;

			const formData = new FormData(form);

			if ( counter === 0 ) {

				formData.append('clearBasket', true);

			}

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');

				if ( counter === 0 ) {

					form.closest('.cart').innerHTML = result;

				} else {

					total.innerHTML = result;

				}

				[...document.querySelectorAll('.js-set-cart-counter')].forEach( el => el.setAttribute('data-counter', counter) );

			});

		});

		form.addEventListener('submit', event => {

			event.preventDefault();

			form.dispatchEvent(new Event('change'));

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

						setTimeout( ()=> form.dispatchEvent(new Event('change')),100);

					}

				});

				setTimeout( ()=> item.classList.add('is-remove') );

			});

		});

	};

})(document.querySelectorAll('.cart__item-remove'));

// + | -
// quantity

( form => {

	if(!form) {

		return;

	}

	const quantity = form.querySelectorAll('.cart-quantity');

	Array.from(quantity, el => {

		let value = null;

		const up = el.querySelector('.cart-quantity__btn--up'),
			down = el.querySelector('.cart-quantity__btn--down'),
			count = el.querySelector('.cart-quantity__count');

		up.addEventListener('click', () => {

			value = parseInt(count.value);

			count.value = isNaN(value) ? 1 : value + 1;

			form.dispatchEvent(new Event('change'));

		});

		down.addEventListener('click', () => {

			value = parseInt(count.value);

			if( isNaN(value) || value < 2 ) {

				value = 2;

			}

			count.value = value - 1;

			form.dispatchEvent(new Event('change'));

		});

		count.addEventListener('blur', () => {

			form.dispatchEvent(new Event('change'));

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

			form.dispatchEvent(new Event('change'));

		});

	});

})(document.querySelector('.cart__list'));
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

( filter => {

	if(filter) {

		const resultBox = document.querySelector('.catalog__result'),
			  count = filter.querySelector('.filter__count'),
			  fieldsets = filter.querySelectorAll('.filter__fieldset'),
			  loadingLayer = document.createElement('div');

		loadingLayer.className = 'catalog__loading';

		// change

		filter.addEventListener('change', event => {

			const target = event.target;

			// Все

			if( target.type === 'checkbox' ) {

				const name = target.getAttribute('name'),
					  btnAll = filter.querySelector('.filter__checkbox-all[name="' + name + '"]');

				if ( btnAll ) {

					const list = Array.from(filter.querySelectorAll('input[name="' + name + '"]')).filter(input => input !== btnAll);

					if ( target === btnAll ) {

						Array.from(list, input => input.checked = btnAll.checked);

					} else {

						btnAll.checked = list.every( input => input.checked === true );

					}

				}

			}

			// submit

			console.log(filter, 'change');

			const formData = new FormData(filter);

			// вернуть кол-во
			if ( resultBox.offsetParent === null ) {

				formData.append('count', 'on');

				fetch(filter.getAttribute('action'), {
					method: 'POST',
					body: formData
				})
				.then(response => response.text())
				.then(html => {

					count.textContent = '(' + html + ')';

				});

			} else {

				// удалить цену, если она по дефолту
				// это костыль, т.к. разработчик на сервере это не может сделать.
				if ( filter.elements['price-min'].value === filter.elements['price-min'].parentNode.getAttribute('data-min') ) {

					formData.delete('price-min');

				}
				if ( filter.elements['price-max'].value === filter.elements['price-max'].parentNode.getAttribute('data-max') ) {

					formData.delete('price-max');

				}

				resultBox.insertAdjacentElement('afterbegin', loadingLayer);

				const queryString = new URLSearchParams(formData).toString();

				history.pushState(undefined, '', '?' + queryString);

				fetch(filter.getAttribute('action'), {
					method: 'POST',
					body: formData
				})
				.then(response => response.text())
				.then(html => {

					loadingLayer.remove();
					resultBox.innerHTML = html;

				});

			}

		});

		// submit

		filter.addEventListener('submit', event => {

			document.body.classList.remove('filter-open');

			event.preventDefault();

			filter.dispatchEvent(new Event("change"));

		});

		// default reset

		filter.addEventListener('default', () => {

			Array.from(filter.querySelectorAll('.checkbox__input:checked:not(:disabled)'), checkbox => checkbox.checked = false);

			Array.from(filter.querySelectorAll('.nouislider'), nouislider => nouislider.dispatchEvent(new Event("reset")));

			filter.dispatchEvent(new Event("change"));

		});


		// filter-tags-trigger

		resultBox.addEventListener('click', event => {

			const tag = event.target.closest('.filter-tags-trigger__tag');

			if ( tag ) {

				if( tag.classList.contains('filter-tags-trigger__tag--reset') ) {

					filter.dispatchEvent(new Event("default"));

				} else {

					const name = tag.getAttribute('data-name'),
						  value = tag.getAttribute('data-value');

					console.log(name,value);

					if ( name === "nouislider" ) {

						filter.querySelector('.nouislider--' + value).dispatchEvent(new Event("reset"));

					} else {

						filter.querySelector(`[name="${name}"][value="${value}"]`).checked = false;

					}

					filter.dispatchEvent(new Event("change"));

				}

			}

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

					filter.dispatchEvent(new Event("change"));

				});

			});

		})

	}

})(document.querySelectorAll('.filter-sort-trigger'));


// filter-sort-trigger mobile

( form => {

	if(form) {

		const filter = document.querySelector('#' + form.getAttribute('data-id'));

		form.addEventListener("change", event => {

			filter.elements.direction.value = event.target.getAttribute('data-direction');
			filter.elements.sort.value = form.elements.sort.value;

			filter.dispatchEvent(new Event("change"));

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

		modalCart.dispatchEvent(new Event("change"));

	});

	modalCart.addEventListener('keyup', event => {

		console.log(event.key);

		if ( event.target.classList.contains('quantity__input') ) {

			event.target.value = event.target.value.replace(/[\D]/g, '');

			modalCart.dispatchEvent(new Event("change"));

		}

	});

	modalCart.addEventListener('click', event => {

		const input = modalCart.querySelector('.quantity__input');

		if ( event.target === input ) {

			input.setSelectionRange(0,9);

		}

		if ( event.target.closest('.quantity__btn--up') ) {

			input.value = parseInt(input.value) + 1;

			modalCart.dispatchEvent(new Event("change"));

		}

		if ( event.target.closest('.quantity__btn--down') ) {

			input.value = parseInt(input.value) <= 1 ? 1 : parseInt(input.value) - 1;

			modalCart.dispatchEvent(new Event("change"));

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

				modal.dispatchEvent(new Event("hide"));

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

						okText.innerHTML = result.text;
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

						errorText.innerHTML = result.text;
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

		form.addEventListener('change', form.submit);

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

			modal.dispatchEvent(new Event("hide"));

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

			modal.dispatchEvent(new Event("hide"));

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

				form.dispatchEvent(new Event("change"));

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwianMuY29va2llLm1pbi5qcyIsIm11c3RhY2hlLm1pbi5qcyIsInB1YnN1Yi5taW4uanMiLCJqcy5qcyIsImFjY291bnQuanMiLCJjYXJ0LmpzIiwiY2F0ZWdvcnkuanMiLCJjb250ZW50LWJsb2NrLmpzIiwiZmlsdGVyLmpzIiwiZm9ybS1idXkuanMiLCJmb3JtLWNpdHkuanMiLCJmb3JtLmpzIiwiZ2FsbGVyeS5qcyIsImhlYWRlci5qcyIsImxrLmpzIiwibWFzay5qcyIsIm1lbnUuanMiLCJtb2RhbC5qcyIsIm5vdWlzbGlkZXIuanMiLCJwYWdlLXVwLmpzIiwic2VsZWN0LmpzIiwic3dpcGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FDRkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oYSxuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZSxleHBvcnRzLG1vZHVsZSk6YS5Db3VudFVwPW4oKX0odGhpcyxmdW5jdGlvbihhLG4sdCl7cmV0dXJuIGZ1bmN0aW9uKGEsbix0LGUsaSxyKXt2YXIgdT10aGlzO2lmKHUudmVyc2lvbj1mdW5jdGlvbigpe3JldHVyblwiMS45LjNcIn0sdS5vcHRpb25zPXt1c2VFYXNpbmc6ITAsdXNlR3JvdXBpbmc6ITAsc2VwYXJhdG9yOlwiLFwiLGRlY2ltYWw6XCIuXCIsZWFzaW5nRm46ZnVuY3Rpb24oYSxuLHQsZSl7cmV0dXJuIHQqKDEtTWF0aC5wb3coMiwtMTAqYS9lKSkqMTAyNC8xMDIzK259LGZvcm1hdHRpbmdGbjpmdW5jdGlvbihhKXt2YXIgbix0LGUsaSxyLG8scz1hPDA7aWYoYT1NYXRoLmFicyhhKS50b0ZpeGVkKHUuZGVjaW1hbHMpLG49KGErPVwiXCIpLnNwbGl0KFwiLlwiKSx0PW5bMF0sZT0xPG4ubGVuZ3RoP3Uub3B0aW9ucy5kZWNpbWFsK25bMV06XCJcIix1Lm9wdGlvbnMudXNlR3JvdXBpbmcpe2ZvcihpPVwiXCIscj0wLG89dC5sZW5ndGg7cjxvOysrcikwIT09ciYmciUzPT0wJiYoaT11Lm9wdGlvbnMuc2VwYXJhdG9yK2kpLGk9dFtvLXItMV0raTt0PWl9cmV0dXJuIHUub3B0aW9ucy5udW1lcmFscy5sZW5ndGgmJih0PXQucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pLGU9ZS5yZXBsYWNlKC9bMC05XS9nLGZ1bmN0aW9uKGEpe3JldHVybiB1Lm9wdGlvbnMubnVtZXJhbHNbK2FdfSkpLChzP1wiLVwiOlwiXCIpK3Uub3B0aW9ucy5wcmVmaXgrdCtlK3Uub3B0aW9ucy5zdWZmaXh9LHByZWZpeDpcIlwiLHN1ZmZpeDpcIlwiLG51bWVyYWxzOltdfSxyJiZcIm9iamVjdFwiPT10eXBlb2Ygcilmb3IodmFyIG8gaW4gdS5vcHRpb25zKXIuaGFzT3duUHJvcGVydHkobykmJm51bGwhPT1yW29dJiYodS5vcHRpb25zW29dPXJbb10pO1wiXCI9PT11Lm9wdGlvbnMuc2VwYXJhdG9yP3Uub3B0aW9ucy51c2VHcm91cGluZz0hMTp1Lm9wdGlvbnMuc2VwYXJhdG9yPVwiXCIrdS5vcHRpb25zLnNlcGFyYXRvcjtmb3IodmFyIHM9MCxsPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXSxtPTA7bTxsLmxlbmd0aCYmIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7KyttKXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9d2luZG93W2xbbV0rXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fHdpbmRvd1tsW21dK1wiQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdO2Z1bmN0aW9uIGQoYSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGEmJiFpc05hTihhKX13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhLG4pe3ZhciB0PShuZXcgRGF0ZSkuZ2V0VGltZSgpLGU9TWF0aC5tYXgoMCwxNi0odC1zKSksaT13aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2EodCtlKX0sZSk7cmV0dXJuIHM9dCtlLGl9KSx3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fCh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSl7Y2xlYXJUaW1lb3V0KGEpfSksdS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7cmV0dXJuISF1LmluaXRpYWxpemVkfHwodS5lcnJvcj1cIlwiLHUuZD1cInN0cmluZ1wiPT10eXBlb2YgYT9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKTphLHUuZD8odS5zdGFydFZhbD1OdW1iZXIobiksdS5lbmRWYWw9TnVtYmVyKHQpLGQodS5zdGFydFZhbCkmJmQodS5lbmRWYWwpPyh1LmRlY2ltYWxzPU1hdGgubWF4KDAsZXx8MCksdS5kZWM9TWF0aC5wb3coMTAsdS5kZWNpbWFscyksdS5kdXJhdGlvbj0xZTMqTnVtYmVyKGkpfHwyZTMsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LmZyYW1lVmFsPXUuc3RhcnRWYWwsdS5pbml0aWFsaXplZD0hMCk6KHUuZXJyb3I9XCJbQ291bnRVcF0gc3RhcnRWYWwgKFwiK24rXCIpIG9yIGVuZFZhbCAoXCIrdCtcIikgaXMgbm90IGEgbnVtYmVyXCIsITEpKTohKHUuZXJyb3I9XCJbQ291bnRVcF0gdGFyZ2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkXCIpKX0sdS5wcmludFZhbHVlPWZ1bmN0aW9uKGEpe3ZhciBuPXUub3B0aW9ucy5mb3JtYXR0aW5nRm4oYSk7XCJJTlBVVFwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnZhbHVlPW46XCJ0ZXh0XCI9PT11LmQudGFnTmFtZXx8XCJ0c3BhblwiPT09dS5kLnRhZ05hbWU/dGhpcy5kLnRleHRDb250ZW50PW46dGhpcy5kLmlubmVySFRNTD1ufSx1LmNvdW50PWZ1bmN0aW9uKGEpe3Uuc3RhcnRUaW1lfHwodS5zdGFydFRpbWU9YSk7dmFyIG49KHUudGltZXN0YW1wPWEpLXUuc3RhcnRUaW1lO3UucmVtYWluaW5nPXUuZHVyYXRpb24tbix1Lm9wdGlvbnMudXNlRWFzaW5nP3UuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC11Lm9wdGlvbnMuZWFzaW5nRm4obiwwLHUuc3RhcnRWYWwtdS5lbmRWYWwsdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11Lm9wdGlvbnMuZWFzaW5nRm4obix1LnN0YXJ0VmFsLHUuZW5kVmFsLXUuc3RhcnRWYWwsdS5kdXJhdGlvbik6dS5jb3VudERvd24/dS5mcmFtZVZhbD11LnN0YXJ0VmFsLSh1LnN0YXJ0VmFsLXUuZW5kVmFsKSoobi91LmR1cmF0aW9uKTp1LmZyYW1lVmFsPXUuc3RhcnRWYWwrKHUuZW5kVmFsLXUuc3RhcnRWYWwpKihuL3UuZHVyYXRpb24pLHUuY291bnREb3duP3UuZnJhbWVWYWw9dS5mcmFtZVZhbDx1LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsOnUuZnJhbWVWYWw9dS5mcmFtZVZhbD51LmVuZFZhbD91LmVuZFZhbDp1LmZyYW1lVmFsLHUuZnJhbWVWYWw9TWF0aC5yb3VuZCh1LmZyYW1lVmFsKnUuZGVjKS91LmRlYyx1LnByaW50VmFsdWUodS5mcmFtZVZhbCksbjx1LmR1cmF0aW9uP3UuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KTp1LmNhbGxiYWNrJiZ1LmNhbGxiYWNrKCl9LHUuc3RhcnQ9ZnVuY3Rpb24oYSl7dS5pbml0aWFsaXplKCkmJih1LmNhbGxiYWNrPWEsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKX0sdS5wYXVzZVJlc3VtZT1mdW5jdGlvbigpe3UucGF1c2VkPyh1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5kdXJhdGlvbj11LnJlbWFpbmluZyx1LnN0YXJ0VmFsPXUuZnJhbWVWYWwscmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKToodS5wYXVzZWQ9ITAsY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpKX0sdS5yZXNldD1mdW5jdGlvbigpe3UucGF1c2VkPSExLGRlbGV0ZSB1LnN0YXJ0VGltZSx1LmluaXRpYWxpemVkPSExLHUuaW5pdGlhbGl6ZSgpJiYoY2FuY2VsQW5pbWF0aW9uRnJhbWUodS5yQUYpLHUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKSl9LHUudXBkYXRlPWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYoZChhPU51bWJlcihhKSk/KHUuZXJyb3I9XCJcIixhIT09dS5mcmFtZVZhbCYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5zdGFydFZhbD11LmZyYW1lVmFsLHUuZW5kVmFsPWEsdS5jb3VudERvd249dS5zdGFydFZhbD51LmVuZFZhbCx1LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCkpKTp1LmVycm9yPVwiW0NvdW50VXBdIHVwZGF0ZSgpIC0gbmV3IGVuZFZhbCBpcyBub3QgYSBudW1iZXI6IFwiK2EpfSx1LmluaXRpYWxpemUoKSYmdS5wcmludFZhbHVlKHUuc3RhcnRWYWwpfX0pOyIsIi8qISBqcy1jb29raWUgdjMuMC4wLXJjLjEgfCBNSVQgKi9cclxuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGU9ZXx8c2VsZixmdW5jdGlvbigpe3ZhciBuPWUuQ29va2llcyxyPWUuQ29va2llcz10KCk7ci5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGUuQ29va2llcz1uLHJ9fSgpKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKWVbcl09bltyXX1yZXR1cm4gZX12YXIgdD17cmVhZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksZGVjb2RlVVJJQ29tcG9uZW50KX0sd3JpdGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlKS5yZXBsYWNlKC8lKDJbMzQ2QkZdfDNbQUMtRl18NDB8NVtCREVdfDYwfDdbQkNEXSkvZyxkZWNvZGVVUklDb21wb25lbnQpfX07cmV0dXJuIGZ1bmN0aW9uIG4ocixvKXtmdW5jdGlvbiBpKHQsbixpKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe1wibnVtYmVyXCI9PXR5cGVvZihpPWUoe30sbyxpKSkuZXhwaXJlcyYmKGkuZXhwaXJlcz1uZXcgRGF0ZShEYXRlLm5vdygpKzg2NGU1KmkuZXhwaXJlcykpLGkuZXhwaXJlcyYmKGkuZXhwaXJlcz1pLmV4cGlyZXMudG9VVENTdHJpbmcoKSksdD1lbmNvZGVVUklDb21wb25lbnQodCkucmVwbGFjZSgvJSgyWzM0NkJdfDVFfDYwfDdDKS9nLGRlY29kZVVSSUNvbXBvbmVudCkucmVwbGFjZSgvWygpXS9nLGVzY2FwZSksbj1yLndyaXRlKG4sdCk7dmFyIGM9XCJcIjtmb3IodmFyIHUgaW4gaSlpW3VdJiYoYys9XCI7IFwiK3UsITAhPT1pW3VdJiYoYys9XCI9XCIraVt1XS5zcGxpdChcIjtcIilbMF0pKTtyZXR1cm4gZG9jdW1lbnQuY29va2llPXQrXCI9XCIrbitjfX1yZXR1cm4gT2JqZWN0LmNyZWF0ZSh7c2V0OmksZ2V0OmZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmKCFhcmd1bWVudHMubGVuZ3RofHxlKSl7Zm9yKHZhciBuPWRvY3VtZW50LmNvb2tpZT9kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTpbXSxvPXt9LGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIGM9bltpXS5zcGxpdChcIj1cIiksdT1jLnNsaWNlKDEpLmpvaW4oXCI9XCIpOydcIic9PT11WzBdJiYodT11LnNsaWNlKDEsLTEpKTt0cnl7dmFyIGY9dC5yZWFkKGNbMF0pO2lmKG9bZl09ci5yZWFkKHUsZiksZT09PWYpYnJlYWt9Y2F0Y2goZSl7fX1yZXR1cm4gZT9vW2VdOm99fSxyZW1vdmU6ZnVuY3Rpb24odCxuKXtpKHQsXCJcIixlKHt9LG4se2V4cGlyZXM6LTF9KSl9LHdpdGhBdHRyaWJ1dGVzOmZ1bmN0aW9uKHQpe3JldHVybiBuKHRoaXMuY29udmVydGVyLGUoe30sdGhpcy5hdHRyaWJ1dGVzLHQpKX0sd2l0aENvbnZlcnRlcjpmdW5jdGlvbih0KXtyZXR1cm4gbihlKHt9LHRoaXMuY29udmVydGVyLHQpLHRoaXMuYXR0cmlidXRlcyl9fSx7YXR0cmlidXRlczp7dmFsdWU6T2JqZWN0LmZyZWV6ZShvKX0sY29udmVydGVyOnt2YWx1ZTpPYmplY3QuZnJlZXplKHIpfX0pfSh0LHtwYXRoOlwiL1wifSl9KTtcclxuIiwiKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlKGdsb2JhbCxmYWN0b3J5KXtpZih0eXBlb2YgZXhwb3J0cz09PVwib2JqZWN0XCImJmV4cG9ydHMmJnR5cGVvZiBleHBvcnRzLm5vZGVOYW1lIT09XCJzdHJpbmdcIil7ZmFjdG9yeShleHBvcnRzKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXCJleHBvcnRzXCJdLGZhY3RvcnkpfWVsc2V7Z2xvYmFsLk11c3RhY2hlPXt9O2ZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKX19KSh0aGlzLGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeShtdXN0YWNoZSl7dmFyIG9iamVjdFRvU3RyaW5nPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7dmFyIGlzQXJyYXk9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsKG9iamVjdCl7cmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwob2JqZWN0KT09PVwiW29iamVjdCBBcnJheV1cIn07ZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3Qpe3JldHVybiB0eXBlb2Ygb2JqZWN0PT09XCJmdW5jdGlvblwifWZ1bmN0aW9uIHR5cGVTdHIob2JqKXtyZXR1cm4gaXNBcnJheShvYmopP1wiYXJyYXlcIjp0eXBlb2Ygb2JqfWZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpe3JldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLHByb3BOYW1lKXtyZXR1cm4gb2JqIT1udWxsJiZ0eXBlb2Ygb2JqPT09XCJvYmplY3RcIiYmcHJvcE5hbWUgaW4gb2JqfXZhciByZWdFeHBUZXN0PVJlZ0V4cC5wcm90b3R5cGUudGVzdDtmdW5jdGlvbiB0ZXN0UmVnRXhwKHJlLHN0cmluZyl7cmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZSxzdHJpbmcpfXZhciBub25TcGFjZVJlPS9cXFMvO2Z1bmN0aW9uIGlzV2hpdGVzcGFjZShzdHJpbmcpe3JldHVybiF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsc3RyaW5nKX12YXIgZW50aXR5TWFwPXtcIiZcIjpcIiZhbXA7XCIsXCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJiMzOTtcIixcIi9cIjpcIiYjeDJGO1wiLFwiYFwiOlwiJiN4NjA7XCIsXCI9XCI6XCImI3gzRDtcIn07ZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpe3JldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csZnVuY3Rpb24gZnJvbUVudGl0eU1hcChzKXtyZXR1cm4gZW50aXR5TWFwW3NdfSl9dmFyIHdoaXRlUmU9L1xccyovO3ZhciBzcGFjZVJlPS9cXHMrLzt2YXIgZXF1YWxzUmU9L1xccyo9Lzt2YXIgY3VybHlSZT0vXFxzKlxcfS87dmFyIHRhZ1JlPS8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO2Z1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsdGFncyl7aWYoIXRlbXBsYXRlKXJldHVybltdO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW5zPVtdO3ZhciBzcGFjZXM9W107dmFyIGhhc1RhZz1mYWxzZTt2YXIgbm9uU3BhY2U9ZmFsc2U7ZnVuY3Rpb24gc3RyaXBTcGFjZSgpe2lmKGhhc1RhZyYmIW5vblNwYWNlKXt3aGlsZShzcGFjZXMubGVuZ3RoKWRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXX1lbHNle3NwYWNlcz1bXX1oYXNUYWc9ZmFsc2U7bm9uU3BhY2U9ZmFsc2V9dmFyIG9wZW5pbmdUYWdSZSxjbG9zaW5nVGFnUmUsY2xvc2luZ0N1cmx5UmU7ZnVuY3Rpb24gY29tcGlsZVRhZ3ModGFnc1RvQ29tcGlsZSl7aWYodHlwZW9mIHRhZ3NUb0NvbXBpbGU9PT1cInN0cmluZ1wiKXRhZ3NUb0NvbXBpbGU9dGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLDIpO2lmKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpfHx0YWdzVG9Db21waWxlLmxlbmd0aCE9PTIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWdzOiBcIit0YWdzVG9Db21waWxlKTtvcGVuaW5nVGFnUmU9bmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkrXCJcXFxccypcIik7Y2xvc2luZ1RhZ1JlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO2Nsb3NpbmdDdXJseVJlPW5ldyBSZWdFeHAoXCJcXFxccypcIitlc2NhcGVSZWdFeHAoXCJ9XCIrdGFnc1RvQ29tcGlsZVsxXSkpfWNvbXBpbGVUYWdzKHRhZ3N8fG11c3RhY2hlLnRhZ3MpO3ZhciBzY2FubmVyPW5ldyBTY2FubmVyKHRlbXBsYXRlKTt2YXIgc3RhcnQsdHlwZSx2YWx1ZSxjaHIsdG9rZW4sb3BlblNlY3Rpb247d2hpbGUoIXNjYW5uZXIuZW9zKCkpe3N0YXJ0PXNjYW5uZXIucG9zO3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7aWYodmFsdWUpe2Zvcih2YXIgaT0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtpPHZhbHVlTGVuZ3RoOysraSl7Y2hyPXZhbHVlLmNoYXJBdChpKTtpZihpc1doaXRlc3BhY2UoY2hyKSl7c3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCl9ZWxzZXtub25TcGFjZT10cnVlfXRva2Vucy5wdXNoKFtcInRleHRcIixjaHIsc3RhcnQsc3RhcnQrMV0pO3N0YXJ0Kz0xO2lmKGNocj09PVwiXFxuXCIpc3RyaXBTcGFjZSgpfX1pZighc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpYnJlYWs7aGFzVGFnPXRydWU7dHlwZT1zY2FubmVyLnNjYW4odGFnUmUpfHxcIm5hbWVcIjtzY2FubmVyLnNjYW4od2hpdGVSZSk7aWYodHlwZT09PVwiPVwiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7c2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpfWVsc2UgaWYodHlwZT09PVwie1wiKXt2YWx1ZT1zY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7c2Nhbm5lci5zY2FuKGN1cmx5UmUpO3NjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7dHlwZT1cIiZcIn1lbHNle3ZhbHVlPXNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSl9aWYoIXNjYW5uZXIuc2NhbihjbG9zaW5nVGFnUmUpKXRocm93IG5ldyBFcnJvcihcIlVuY2xvc2VkIHRhZyBhdCBcIitzY2FubmVyLnBvcyk7dG9rZW49W3R5cGUsdmFsdWUsc3RhcnQsc2Nhbm5lci5wb3NdO3Rva2Vucy5wdXNoKHRva2VuKTtpZih0eXBlPT09XCIjXCJ8fHR5cGU9PT1cIl5cIil7c2VjdGlvbnMucHVzaCh0b2tlbil9ZWxzZSBpZih0eXBlPT09XCIvXCIpe29wZW5TZWN0aW9uPXNlY3Rpb25zLnBvcCgpO2lmKCFvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInK3ZhbHVlKydcIiBhdCAnK3N0YXJ0KTtpZihvcGVuU2VjdGlvblsxXSE9PXZhbHVlKXRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicrb3BlblNlY3Rpb25bMV0rJ1wiIGF0ICcrc3RhcnQpfWVsc2UgaWYodHlwZT09PVwibmFtZVwifHx0eXBlPT09XCJ7XCJ8fHR5cGU9PT1cIiZcIil7bm9uU3BhY2U9dHJ1ZX1lbHNlIGlmKHR5cGU9PT1cIj1cIil7Y29tcGlsZVRhZ3ModmFsdWUpfX1vcGVuU2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtpZihvcGVuU2VjdGlvbil0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInK29wZW5TZWN0aW9uWzFdKydcIiBhdCAnK3NjYW5uZXIucG9zKTtyZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSl9ZnVuY3Rpb24gc3F1YXNoVG9rZW5zKHRva2Vucyl7dmFyIHNxdWFzaGVkVG9rZW5zPVtdO3ZhciB0b2tlbixsYXN0VG9rZW47Zm9yKHZhciBpPTAsbnVtVG9rZW5zPXRva2Vucy5sZW5ndGg7aTxudW1Ub2tlbnM7KytpKXt0b2tlbj10b2tlbnNbaV07aWYodG9rZW4pe2lmKHRva2VuWzBdPT09XCJ0ZXh0XCImJmxhc3RUb2tlbiYmbGFzdFRva2VuWzBdPT09XCJ0ZXh0XCIpe2xhc3RUb2tlblsxXSs9dG9rZW5bMV07bGFzdFRva2VuWzNdPXRva2VuWzNdfWVsc2V7c3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7bGFzdFRva2VuPXRva2VufX19cmV0dXJuIHNxdWFzaGVkVG9rZW5zfWZ1bmN0aW9uIG5lc3RUb2tlbnModG9rZW5zKXt2YXIgbmVzdGVkVG9rZW5zPVtdO3ZhciBjb2xsZWN0b3I9bmVzdGVkVG9rZW5zO3ZhciBzZWN0aW9ucz1bXTt2YXIgdG9rZW4sc2VjdGlvbjtmb3IodmFyIGk9MCxudW1Ub2tlbnM9dG9rZW5zLmxlbmd0aDtpPG51bVRva2VuczsrK2kpe3Rva2VuPXRva2Vuc1tpXTtzd2l0Y2godG9rZW5bMF0pe2Nhc2VcIiNcIjpjYXNlXCJeXCI6Y29sbGVjdG9yLnB1c2godG9rZW4pO3NlY3Rpb25zLnB1c2godG9rZW4pO2NvbGxlY3Rvcj10b2tlbls0XT1bXTticmVhaztjYXNlXCIvXCI6c2VjdGlvbj1zZWN0aW9ucy5wb3AoKTtzZWN0aW9uWzVdPXRva2VuWzJdO2NvbGxlY3Rvcj1zZWN0aW9ucy5sZW5ndGg+MD9zZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGgtMV1bNF06bmVzdGVkVG9rZW5zO2JyZWFrO2RlZmF1bHQ6Y29sbGVjdG9yLnB1c2godG9rZW4pfX1yZXR1cm4gbmVzdGVkVG9rZW5zfWZ1bmN0aW9uIFNjYW5uZXIoc3RyaW5nKXt0aGlzLnN0cmluZz1zdHJpbmc7dGhpcy50YWlsPXN0cmluZzt0aGlzLnBvcz0wfVNjYW5uZXIucHJvdG90eXBlLmVvcz1mdW5jdGlvbiBlb3MoKXtyZXR1cm4gdGhpcy50YWlsPT09XCJcIn07U2Nhbm5lci5wcm90b3R5cGUuc2Nhbj1mdW5jdGlvbiBzY2FuKHJlKXt2YXIgbWF0Y2g9dGhpcy50YWlsLm1hdGNoKHJlKTtpZighbWF0Y2h8fG1hdGNoLmluZGV4IT09MClyZXR1cm5cIlwiO3ZhciBzdHJpbmc9bWF0Y2hbMF07dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCk7dGhpcy5wb3MrPXN0cmluZy5sZW5ndGg7cmV0dXJuIHN0cmluZ307U2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsPWZ1bmN0aW9uIHNjYW5VbnRpbChyZSl7dmFyIGluZGV4PXRoaXMudGFpbC5zZWFyY2gocmUpLG1hdGNoO3N3aXRjaChpbmRleCl7Y2FzZS0xOm1hdGNoPXRoaXMudGFpbDt0aGlzLnRhaWw9XCJcIjticmVhaztjYXNlIDA6bWF0Y2g9XCJcIjticmVhaztkZWZhdWx0Om1hdGNoPXRoaXMudGFpbC5zdWJzdHJpbmcoMCxpbmRleCk7dGhpcy50YWlsPXRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpfXRoaXMucG9zKz1tYXRjaC5sZW5ndGg7cmV0dXJuIG1hdGNofTtmdW5jdGlvbiBDb250ZXh0KHZpZXcscGFyZW50Q29udGV4dCl7dGhpcy52aWV3PXZpZXc7dGhpcy5jYWNoZT17XCIuXCI6dGhpcy52aWV3fTt0aGlzLnBhcmVudD1wYXJlbnRDb250ZXh0fUNvbnRleHQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24gcHVzaCh2aWV3KXtyZXR1cm4gbmV3IENvbnRleHQodmlldyx0aGlzKX07Q29udGV4dC5wcm90b3R5cGUubG9va3VwPWZ1bmN0aW9uIGxvb2t1cChuYW1lKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdmFsdWU7aWYoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpe3ZhbHVlPWNhY2hlW25hbWVdfWVsc2V7dmFyIGNvbnRleHQ9dGhpcyxuYW1lcyxpbmRleCxsb29rdXBIaXQ9ZmFsc2U7d2hpbGUoY29udGV4dCl7aWYobmFtZS5pbmRleE9mKFwiLlwiKT4wKXt2YWx1ZT1jb250ZXh0LnZpZXc7bmFtZXM9bmFtZS5zcGxpdChcIi5cIik7aW5kZXg9MDt3aGlsZSh2YWx1ZSE9bnVsbCYmaW5kZXg8bmFtZXMubGVuZ3RoKXtpZihpbmRleD09PW5hbWVzLmxlbmd0aC0xKWxvb2t1cEhpdD1oYXNQcm9wZXJ0eSh2YWx1ZSxuYW1lc1tpbmRleF0pO3ZhbHVlPXZhbHVlW25hbWVzW2luZGV4KytdXX19ZWxzZXt2YWx1ZT1jb250ZXh0LnZpZXdbbmFtZV07bG9va3VwSGl0PWhhc1Byb3BlcnR5KGNvbnRleHQudmlldyxuYW1lKX1pZihsb29rdXBIaXQpYnJlYWs7Y29udGV4dD1jb250ZXh0LnBhcmVudH1jYWNoZVtuYW1lXT12YWx1ZX1pZihpc0Z1bmN0aW9uKHZhbHVlKSl2YWx1ZT12YWx1ZS5jYWxsKHRoaXMudmlldyk7cmV0dXJuIHZhbHVlfTtmdW5jdGlvbiBXcml0ZXIoKXt0aGlzLmNhY2hlPXt9fVdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZT1mdW5jdGlvbiBjbGVhckNhY2hlKCl7dGhpcy5jYWNoZT17fX07V3JpdGVyLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbiBwYXJzZSh0ZW1wbGF0ZSx0YWdzKXt2YXIgY2FjaGU9dGhpcy5jYWNoZTt2YXIgdG9rZW5zPWNhY2hlW3RlbXBsYXRlXTtpZih0b2tlbnM9PW51bGwpdG9rZW5zPWNhY2hlW3RlbXBsYXRlXT1wYXJzZVRlbXBsYXRlKHRlbXBsYXRlLHRhZ3MpO3JldHVybiB0b2tlbnN9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uIHJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKXt2YXIgdG9rZW5zPXRoaXMucGFyc2UodGVtcGxhdGUpO3ZhciBjb250ZXh0PXZpZXcgaW5zdGFuY2VvZiBDb250ZXh0P3ZpZXc6bmV3IENvbnRleHQodmlldyk7cmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLHRlbXBsYXRlKX07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnM9ZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRva2Vucyxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpe3ZhciBidWZmZXI9XCJcIjt2YXIgdG9rZW4sc3ltYm9sLHZhbHVlO2Zvcih2YXIgaT0wLG51bVRva2Vucz10b2tlbnMubGVuZ3RoO2k8bnVtVG9rZW5zOysraSl7dmFsdWU9dW5kZWZpbmVkO3Rva2VuPXRva2Vuc1tpXTtzeW1ib2w9dG9rZW5bMF07aWYoc3ltYm9sPT09XCIjXCIpdmFsdWU9dGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIl5cIil2YWx1ZT10aGlzLnJlbmRlckludmVydGVkKHRva2VuLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSk7ZWxzZSBpZihzeW1ib2w9PT1cIj5cIil2YWx1ZT10aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKTtlbHNlIGlmKHN5bWJvbD09PVwiJlwiKXZhbHVlPXRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCk7ZWxzZSBpZihzeW1ib2w9PT1cIm5hbWVcIil2YWx1ZT10aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbixjb250ZXh0KTtlbHNlIGlmKHN5bWJvbD09PVwidGV4dFwiKXZhbHVlPXRoaXMucmF3VmFsdWUodG9rZW4pO2lmKHZhbHVlIT09dW5kZWZpbmVkKWJ1ZmZlcis9dmFsdWV9cmV0dXJuIGJ1ZmZlcn07V3JpdGVyLnByb3RvdHlwZS5yZW5kZXJTZWN0aW9uPWZ1bmN0aW9uIHJlbmRlclNlY3Rpb24odG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgc2VsZj10aGlzO3ZhciBidWZmZXI9XCJcIjt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2Z1bmN0aW9uIHN1YlJlbmRlcih0ZW1wbGF0ZSl7cmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLGNvbnRleHQscGFydGlhbHMpfWlmKCF2YWx1ZSlyZXR1cm47aWYoaXNBcnJheSh2YWx1ZSkpe2Zvcih2YXIgaj0wLHZhbHVlTGVuZ3RoPXZhbHVlLmxlbmd0aDtqPHZhbHVlTGVuZ3RoOysrail7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LnB1c2godmFsdWVbal0pLHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfX1lbHNlIGlmKHR5cGVvZiB2YWx1ZT09PVwib2JqZWN0XCJ8fHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCJ8fHR5cGVvZiB2YWx1ZT09PVwibnVtYmVyXCIpe2J1ZmZlcis9dGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sY29udGV4dC5wdXNoKHZhbHVlKSxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKX1lbHNlIGlmKGlzRnVuY3Rpb24odmFsdWUpKXtpZih0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSE9PVwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGVcIik7dmFsdWU9dmFsdWUuY2FsbChjb250ZXh0LnZpZXcsb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSx0b2tlbls1XSksc3ViUmVuZGVyKTtpZih2YWx1ZSE9bnVsbClidWZmZXIrPXZhbHVlfWVsc2V7YnVmZmVyKz10aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSxjb250ZXh0LHBhcnRpYWxzLG9yaWdpbmFsVGVtcGxhdGUpfXJldHVybiBidWZmZXJ9O1dyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQ9ZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQodG9rZW4sY29udGV4dCxwYXJ0aWFscyxvcmlnaW5hbFRlbXBsYXRlKXt2YXIgdmFsdWU9Y29udGV4dC5sb29rdXAodG9rZW5bMV0pO2lmKCF2YWx1ZXx8aXNBcnJheSh2YWx1ZSkmJnZhbHVlLmxlbmd0aD09PTApcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLGNvbnRleHQscGFydGlhbHMsb3JpZ2luYWxUZW1wbGF0ZSl9O1dyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbD1mdW5jdGlvbiByZW5kZXJQYXJ0aWFsKHRva2VuLGNvbnRleHQscGFydGlhbHMpe2lmKCFwYXJ0aWFscylyZXR1cm47dmFyIHZhbHVlPWlzRnVuY3Rpb24ocGFydGlhbHMpP3BhcnRpYWxzKHRva2VuWzFdKTpwYXJ0aWFsc1t0b2tlblsxXV07aWYodmFsdWUhPW51bGwpcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLGNvbnRleHQscGFydGlhbHMsdmFsdWUpfTtXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlPWZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlKHRva2VuLGNvbnRleHQpe3ZhciB2YWx1ZT1jb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7aWYodmFsdWUhPW51bGwpcmV0dXJuIHZhbHVlfTtXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZT1mdW5jdGlvbiBlc2NhcGVkVmFsdWUodG9rZW4sY29udGV4dCl7dmFyIHZhbHVlPWNvbnRleHQubG9va3VwKHRva2VuWzFdKTtpZih2YWx1ZSE9bnVsbClyZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKX07V3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZT1mdW5jdGlvbiByYXdWYWx1ZSh0b2tlbil7cmV0dXJuIHRva2VuWzFdfTttdXN0YWNoZS5uYW1lPVwibXVzdGFjaGUuanNcIjttdXN0YWNoZS52ZXJzaW9uPVwiMi4zLjBcIjttdXN0YWNoZS50YWdzPVtcIjwlXCIsXCIlPlwiXTt2YXIgZGVmYXVsdFdyaXRlcj1uZXcgV3JpdGVyO211c3RhY2hlLmNsZWFyQ2FjaGU9ZnVuY3Rpb24gY2xlYXJDYWNoZSgpe3JldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKX07bXVzdGFjaGUucGFyc2U9ZnVuY3Rpb24gcGFyc2UodGVtcGxhdGUsdGFncyl7cmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsdGFncyl9O211c3RhY2hlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodGVtcGxhdGUsdmlldyxwYXJ0aWFscyl7aWYodHlwZW9mIHRlbXBsYXRlIT09XCJzdHJpbmdcIil7dGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnKydidXQgXCInK3R5cGVTdHIodGVtcGxhdGUpKydcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcrXCJhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscylcIil9cmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLHZpZXcscGFydGlhbHMpfTttdXN0YWNoZS50b19odG1sPWZ1bmN0aW9uIHRvX2h0bWwodGVtcGxhdGUsdmlldyxwYXJ0aWFscyxzZW5kKXt2YXIgcmVzdWx0PW11c3RhY2hlLnJlbmRlcih0ZW1wbGF0ZSx2aWV3LHBhcnRpYWxzKTtpZihpc0Z1bmN0aW9uKHNlbmQpKXtzZW5kKHJlc3VsdCl9ZWxzZXtyZXR1cm4gcmVzdWx0fX07bXVzdGFjaGUuZXNjYXBlPWVzY2FwZUh0bWw7bXVzdGFjaGUuU2Nhbm5lcj1TY2FubmVyO211c3RhY2hlLkNvbnRleHQ9Q29udGV4dDttdXN0YWNoZS5Xcml0ZXI9V3JpdGVyO3JldHVybiBtdXN0YWNoZX0pOyIsIi8qKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXHJcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXHJcbiAqXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcclxuICovXHJcbiFmdW5jdGlvbihuLHQpe1widXNlIHN0cmljdFwiO3ZhciByPXt9O24uUHViU3ViPXI7dmFyIGU9bi5kZWZpbmU7IWZ1bmN0aW9uKG4pe3ZhciB0PXt9LHI9LTE7ZnVuY3Rpb24gZShuKXt2YXIgdDtmb3IodCBpbiBuKWlmKG4uaGFzT3duUHJvcGVydHkodCkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbyhuLHQscil7dHJ5e24odCxyKX1jYXRjaChuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbigpe3Rocm93IG59fShuKSwwKX19ZnVuY3Rpb24gaShuLHQscil7bih0LHIpfWZ1bmN0aW9uIHUobixyLGUsdSl7dmFyIGYscz10W3JdLGM9dT9pOm87aWYodC5oYXNPd25Qcm9wZXJ0eShyKSlmb3IoZiBpbiBzKXMuaGFzT3duUHJvcGVydHkoZikmJmMoc1tmXSxuLGUpfWZ1bmN0aW9uIGYobixyLG8saSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPVN0cmluZyhuKSxvPWUubGFzdEluZGV4T2YoXCIuXCIpO2Zvcih1KG4sbix0LHIpOy0xIT09bzspZT1lLnN1YnN0cigwLG8pLG89ZS5sYXN0SW5kZXhPZihcIi5cIiksdShuLGUsdCxyKX19KG49XCJzeW1ib2xcIj09dHlwZW9mIG4/bi50b1N0cmluZygpOm4scixpKSxzPWZ1bmN0aW9uKG4pe3ZhciByPVN0cmluZyhuKSxvPUJvb2xlYW4odC5oYXNPd25Qcm9wZXJ0eShyKSYmZSh0W3JdKSksaT1yLmxhc3RJbmRleE9mKFwiLlwiKTtmb3IoOyFvJiYtMSE9PWk7KXI9ci5zdWJzdHIoMCxpKSxpPXIubGFzdEluZGV4T2YoXCIuXCIpLG89Qm9vbGVhbih0Lmhhc093blByb3BlcnR5KHIpJiZlKHRbcl0pKTtyZXR1cm4gb30obik7cmV0dXJuISFzJiYoITA9PT1vP2YoKTpzZXRUaW1lb3V0KGYsMCksITApfW4ucHVibGlzaD1mdW5jdGlvbih0LHIpe3JldHVybiBmKHQsciwhMSxuLmltbWVkaWF0ZUV4Y2VwdGlvbnMpfSxuLnB1Ymxpc2hTeW5jPWZ1bmN0aW9uKHQscil7cmV0dXJuIGYodCxyLCEwLG4uaW1tZWRpYXRlRXhjZXB0aW9ucyl9LG4uc3Vic2NyaWJlPWZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSlyZXR1cm4hMTtuPVwic3ltYm9sXCI9PXR5cGVvZiBuP24udG9TdHJpbmcoKTpuLHQuaGFzT3duUHJvcGVydHkobil8fCh0W25dPXt9KTt2YXIgbz1cInVpZF9cIitTdHJpbmcoKytyKTtyZXR1cm4gdFtuXVtvXT1lLG99LG4uc3Vic2NyaWJlT25jZT1mdW5jdGlvbih0LHIpe3ZhciBlPW4uc3Vic2NyaWJlKHQsZnVuY3Rpb24oKXtuLnVuc3Vic2NyaWJlKGUpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7cmV0dXJuIG59LG4uY2xlYXJBbGxTdWJzY3JpcHRpb25zPWZ1bmN0aW9uKCl7dD17fX0sbi5jbGVhclN1YnNjcmlwdGlvbnM9ZnVuY3Rpb24obil7dmFyIHI7Zm9yKHIgaW4gdCl0Lmhhc093blByb3BlcnR5KHIpJiYwPT09ci5pbmRleE9mKG4pJiZkZWxldGUgdFtyXX0sbi51bnN1YnNjcmliZT1mdW5jdGlvbihyKXt2YXIgZSxvLGksdT1cInN0cmluZ1wiPT10eXBlb2YgciYmKHQuaGFzT3duUHJvcGVydHkocil8fGZ1bmN0aW9uKG4pe3ZhciByO2ZvcihyIGluIHQpaWYodC5oYXNPd25Qcm9wZXJ0eShyKSYmMD09PXIuaW5kZXhPZihuKSlyZXR1cm4hMDtyZXR1cm4hMX0ocikpLGY9IXUmJlwic3RyaW5nXCI9PXR5cGVvZiByLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcixjPSExO2lmKCF1KXtmb3IoZSBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkoZSkpe2lmKG89dFtlXSxmJiZvW3JdKXtkZWxldGUgb1tyXSxjPXI7YnJlYWt9aWYocylmb3IoaSBpbiBvKW8uaGFzT3duUHJvcGVydHkoaSkmJm9baV09PT1yJiYoZGVsZXRlIG9baV0sYz0hMCl9cmV0dXJuIGN9bi5jbGVhclN1YnNjcmlwdGlvbnMocil9fShyKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLmFtZD9lKGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmKHZvaWQgMCE9PW1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPXIpLGV4cG9ydHMuUHViU3ViPXIsbW9kdWxlLmV4cG9ydHM9ZXhwb3J0cz1yKX0oXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93fHx0aGlzKTsiLCIvKiEgVVRGLThcclxuXHJcbsKpIGtvdnJpZ2luXHJcbtCS0YHQtSDQv9GA0LDQstCwINGA0LDQt9GA0LXRiNC10L3Ri1xyXG7QutGA0LDRgdC40LLRi9C5INC00LjQt9Cw0LnQvSDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQutGA0LDRgdC40LLRi9C5INC60L7QtMKuXHJcblxyXG5odHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXNjc3MvXHJcblxyXG4qL1xyXG5cclxuKCAoKSA9PiB7XHJcblxyXG5cdGxldCByZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuXHJcblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAoIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZih3aW5kb3dXaWR0aE9MZCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdHdpbmRvd1dpZHRoT0xkID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG5cdFx0XHRcdFx0XHRQdWJTdWIucHVibGlzaCgnd2luZG93V2lkdGhSZXNpemUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFB1YlN1Yi5wdWJsaXNoKCdwYWdlTG9hZCcpO1xyXG5cclxuXHRcdENvb2tpZXMuc2V0KCdmYXN0TG9hZFNjcmlwdCcsIHRydWUpO1xyXG5cclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10cmFuc2l0aW9uRGVmYXVsdCcsICcuM3MnKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHR3aW5kb3cuY3NzQW5pbWF0aW9uID0gYT0+e2xldCBiLGMsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY3NzYW5pbWF0aW9uXCIpO3N3aXRjaChhKXtjYXNlJ2FuaW1hdGlvbic6Yj17XCJhbmltYXRpb25cIjpcImFuaW1hdGlvbmVuZFwiLFwiT0FuaW1hdGlvblwiOlwib0FuaW1hdGlvbkVuZFwiLFwiTW96QW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIldlYmtpdEFuaW1hdGlvblwiOlwid2Via2l0QW5pbWF0aW9uRW5kXCJ9O2JyZWFrO2Nhc2UndHJhbnNpdGlvbic6Yj17XCJ0cmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJPVHJhbnNpdGlvblwiOlwib1RyYW5zaXRpb25FbmRcIixcIk1velRyYW5zaXRpb25cIjpcInRyYW5zaXRpb25lbmRcIixcIldlYmtpdFRyYW5zaXRpb25cIjpcIndlYmtpdFRyYW5zaXRpb25FbmRcIn19Zm9yKGMgaW4gYilpZihkLnN0eWxlW2NdIT09dW5kZWZpbmVkKXJldHVybiBiW2NdfVxyXG5cclxuXHQvLyBEZXRlcm1pbmUgaWYgYW4gZWxlbWVudCBpcyBpbiB0aGUgdmlzaWJsZSB2aWV3cG9ydFxyXG5cdHdpbmRvdy5pc0luVmlld3BvcnQgPSBlbCA9PiB7XHJcblx0XHRjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdC8vINC+0YLQtNC10LvRj9C10Lwg0YLRi9GB0Y/Rh9C4XHJcblx0d2luZG93LnNlcE51bWJlciA9IHN0ciA9PiB7XHJcblx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcclxuXHRcdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMrL2csJycpO1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyhbXlxcZF18JCkpL2csICckMSAnKTtcclxuXHR9XHJcblxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHR3aW5kb3cuc3RyVG9OdW1iZXIgPSBuID0+IHBhcnNlSW50KG4ucmVwbGFjZSgvXFxzKy9nLCcnKSwgMTApO1xyXG5cclxuLy8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0d2luZG93LmRlY2xlbnNpb24gPSAobnVtLCBleHByZXNzaW9ucykgPT4ge1xyXG5cclxuXHRcdGxldCByLFxyXG5cdFx0XHRjb3VudCA9IG51bSAlIDEwMDtcclxuXHJcblx0XHRpZiAoY291bnQgPiA0ICYmIGNvdW50IDwgMjEpe1xyXG5cclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRjb3VudCA9IGNvdW50ICUgMTA7XHJcblxyXG5cdFx0XHRpZiAoY291bnQgPT0gMSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycwJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSl7XHJcblx0XHRcdFx0ciA9IGV4cHJlc3Npb25zWycxJ107XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzInXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcjtcclxuXHJcblx0fVxyXG5cclxufSkoKTsiLCIoIHRvZ2dsZVBhc3MgPT4ge1xyXG5cclxuXHRpZighdG9nZ2xlUGFzcy5sZW5ndGgpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0L/QvtC60LDQt9Cw0YLRjCDQv9Cw0YDQvtC70YxcclxuXHJcblx0QXJyYXkuZnJvbSh0b2dnbGVQYXNzLCBncm91cCA9PiB7XHJcblxyXG5cdFx0Z3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy52aXNpYmxlLXRvZ2dsZS1wYXNzd29yZF9fYnRuJykgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLnZpc2libGUtdG9nZ2xlLXBhc3N3b3JkX19pbnB1dCcpLCBpbnB1dCA9PiBpbnB1dC50eXBlID0gaW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJyA/ICd0ZXh0JyA6ICdwYXNzd29yZCcpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5mcm9tKGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy52aXNpYmxlLXRvZ2dsZS1wYXNzd29yZF9fYnRuIHN2ZycpLCBzdmcgPT4gc3ZnLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpc2libGUtdG9nZ2xlLXBhc3N3b3JkJykpOyIsIiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCBmb3JtICkge1xyXG5cclxuXHRcdGNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3Jlc3VsdC1zdGlja2UnKTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0Y29uc3QgY291bnRlciA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW0nKS5sZW5ndGg7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuXHJcblx0XHRcdGlmICggY291bnRlciA9PT0gMCApIHtcclxuXHJcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdjbGVhckJhc2tldCcsIHRydWUpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmV0Y2goZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0Ym9keTogZm9ybURhdGFcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdFx0aWYgKCBjb3VudGVyID09PSAwICkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0uY2xvc2VzdCgnLmNhcnQnKS5pbm5lckhUTUwgPSByZXN1bHQ7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0dG90YWwuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2V0LWNhcnQtY291bnRlcicpXS5mb3JFYWNoKCBlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnRlcicsIGNvdW50ZXIpICk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbGlzdCcpKTtcclxuXHJcbi8vIHJlbW92ZVxyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19saXN0Jyk7XHJcblxyXG5cdGlmKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBpdGVtID0gYnRuLmNsb3Nlc3QoJy5jYXJ0X19pdGVtJyk7XHJcblxyXG5cdFx0XHRidG4ucXVlcnlTZWxlY3RvcignLmJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0ZW0uc3R5bGUuaGVpZ2h0ID0gaXRlbS5jbGllbnRIZWlnaHQgKyBcInB4XCI7XHJcblxyXG5cdFx0XHRcdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3cuY3NzQW5pbWF0aW9uKCd0cmFuc2l0aW9uJyksIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCcgJiYgaXRlbS5jbGllbnRIZWlnaHQgPT09IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCggKCk9PiBmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSksMTAwKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtcmVtb3ZlJykgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnRfX2l0ZW0tcmVtb3ZlJykpO1xyXG5cclxuLy8gKyB8IC1cclxuLy8gcXVhbnRpdHlcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKCFmb3JtKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHF1YW50aXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1xdWFudGl0eScpO1xyXG5cclxuXHRBcnJheS5mcm9tKHF1YW50aXR5LCBlbCA9PiB7XHJcblxyXG5cdFx0bGV0IHZhbHVlID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCB1cCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXF1YW50aXR5X19idG4tLXVwJyksXHJcblx0XHRcdGRvd24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY2FydC1xdWFudGl0eV9fYnRuLS1kb3duJyksXHJcblx0XHRcdGNvdW50ID0gZWwucXVlcnlTZWxlY3RvcignLmNhcnQtcXVhbnRpdHlfX2NvdW50Jyk7XHJcblxyXG5cdFx0dXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHR2YWx1ZSA9IHBhcnNlSW50KGNvdW50LnZhbHVlKTtcclxuXHJcblx0XHRcdGNvdW50LnZhbHVlID0gaXNOYU4odmFsdWUpID8gMSA6IHZhbHVlICsgMTtcclxuXHJcblx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dmFsdWUgPSBwYXJzZUludChjb3VudC52YWx1ZSk7XHJcblxyXG5cdFx0XHRpZiggaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMiApIHtcclxuXHJcblx0XHRcdFx0dmFsdWUgPSAyO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y291bnQudmFsdWUgPSB2YWx1ZSAtIDE7XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y291bnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuXHJcblx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRjb3VudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoICgpID0+IGNvdW50LnNldFNlbGVjdGlvblJhbmdlKDAsOSksMTAwKVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdmFsID0gY291bnQudmFsdWUucmVwbGFjZSgvW1xcRF0vZywgJycpO1xyXG5cclxuXHRcdFx0aWYgKCBpc05hTih2YWwpICkge1xyXG5cclxuXHRcdFx0XHR2YWwgPSAxO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y291bnQudmFsdWUgPSB2YWw7XHJcblxyXG5cdFx0XHRmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX2xpc3QnKSk7IiwiLy8g0LXRidC1IG1lbnUgY2F0ZWdvcnlcclxuXHJcbiggYmxvY2tzID0+IHtcclxuXHJcblx0aWYoYmxvY2tzLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oYmxvY2tzLCBibG9jayA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBibG9jay5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRlZ29yeV9fdG9nZ2xlJyksXHJcblx0XHRcdFx0ICB3cmFwID0gYmxvY2sucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0ZWdvcnlfX3dyYXAnKSxcclxuXHRcdFx0XHQgIGxpc3QgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXRlZ29yeV9fbGV2ZWwtMicpO1xyXG5cclxuXHRcdFx0aWYgKCBidG4gKSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHR3cmFwLnN0eWxlLmhlaWdodCA9IGxpc3QuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcclxuXHRcdFx0XHRcdFx0d3JhcC5zdHlsZS5oZWlnaHQgPSBsaXN0LmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGVnb3J5X19zZWN0aW9uJykpO1xyXG5cclxuLy8g0LXRidC1IGNhdGVnb3J5LWNhcmRzXHJcblxyXG4oIGJsb2NrcyA9PiB7XHJcblxyXG5cdGlmKGJsb2Nrcy5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJsb2NrcywgYmxvY2sgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgdG9nZ2xlID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmRzX190b2dnbGUnKTtcclxuXHJcblx0XHRcdGlmICggdG9nZ2xlICkge1xyXG5cclxuXHRcdFx0XHRjb25zdCBidG4gPSB0b2dnbGUucXVlcnlTZWxlY3RvcignLmJ0bicpLFxyXG5cdFx0XHRcdFx0ICB3cmFwID0gYmxvY2sucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmRzX193cmFwJyksXHJcblx0XHRcdFx0XHQgIGxpc3QgPSBibG9jay5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZHNfX2xpc3QnKTtcclxuXHJcblx0XHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdHdyYXAuc3R5bGUuaGVpZ2h0ID0gbGlzdC5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoICgpPT4ge1xyXG5cclxuXHRcdFx0XHRcdFx0YmxvY2suY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cdFx0XHRcdFx0XHR3cmFwLnN0eWxlLmhlaWdodCA9IGxpc3QuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5LWNhcmRzJykpOyIsIi8vIGNvbnRlbnQtYmxvY2tcclxuXHJcbiggYmxvY2tzID0+IHtcclxuXHJcblx0aWYoYmxvY2tzLmxlbmd0aCkge1xyXG5cclxuXHRcdEFycmF5LmZyb20oYmxvY2tzLCBibG9jayA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG4gPSBibG9jay5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ibG9ja19fdG9nZ2xlJyk7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBibG9jay5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGVudC1ibG9jaycpKTsiLCJcclxuKCBmaWx0ZXIgPT4ge1xyXG5cclxuXHRpZihmaWx0ZXIpIHtcclxuXHJcblx0XHRjb25zdCByZXN1bHRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fcmVzdWx0JyksXHJcblx0XHRcdCAgY291bnQgPSBmaWx0ZXIucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fY291bnQnKSxcclxuXHRcdFx0ICBmaWVsZHNldHMgPSBmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fZmllbGRzZXQnKSxcclxuXHRcdFx0ICBsb2FkaW5nTGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0XHRsb2FkaW5nTGF5ZXIuY2xhc3NOYW1lID0gJ2NhdGFsb2dfX2xvYWRpbmcnO1xyXG5cclxuXHRcdC8vIGNoYW5nZVxyXG5cclxuXHRcdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0XHQvLyDQktGB0LVcclxuXHJcblx0XHRcdGlmKCB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JyApIHtcclxuXHJcblx0XHRcdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSxcclxuXHRcdFx0XHRcdCAgYnRuQWxsID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2NoZWNrYm94LWFsbFtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XHJcblxyXG5cdFx0XHRcdGlmICggYnRuQWxsICkge1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBBcnJheS5mcm9tKGZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJykpLmZpbHRlcihpbnB1dCA9PiBpbnB1dCAhPT0gYnRuQWxsKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHRhcmdldCA9PT0gYnRuQWxsICkge1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbShsaXN0LCBpbnB1dCA9PiBpbnB1dC5jaGVja2VkID0gYnRuQWxsLmNoZWNrZWQpO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG5BbGwuY2hlY2tlZCA9IGxpc3QuZXZlcnkoIGlucHV0ID0+IGlucHV0LmNoZWNrZWQgPT09IHRydWUgKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHN1Ym1pdFxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZmlsdGVyLCAnY2hhbmdlJyk7XHJcblxyXG5cdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmaWx0ZXIpO1xyXG5cclxuXHRcdFx0Ly8g0LLQtdGA0L3Rg9GC0Ywg0LrQvtC7LdCy0L5cclxuXHRcdFx0aWYgKCByZXN1bHRCb3gub2Zmc2V0UGFyZW50ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2NvdW50JywgJ29uJyk7XHJcblxyXG5cdFx0XHRcdGZldGNoKGZpbHRlci5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLCB7XHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGJvZHk6IGZvcm1EYXRhXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcblx0XHRcdFx0LnRoZW4oaHRtbCA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Y291bnQudGV4dENvbnRlbnQgPSAnKCcgKyBodG1sICsgJyknO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vINGD0LTQsNC70LjRgtGMINGG0LXQvdGDLCDQtdGB0LvQuCDQvtC90LAg0L/QviDQtNC10YTQvtC70YLRg1xyXG5cdFx0XHRcdC8vINGN0YLQviDQutC+0YHRgtGL0LvRjCwg0YIu0LouINGA0LDQt9GA0LDQsdC+0YLRh9C40Log0L3QsCDRgdC10YDQstC10YDQtSDRjdGC0L4g0L3QtSDQvNC+0LbQtdGCINGB0LTQtdC70LDRgtGMLlxyXG5cdFx0XHRcdGlmICggZmlsdGVyLmVsZW1lbnRzWydwcmljZS1taW4nXS52YWx1ZSA9PT0gZmlsdGVyLmVsZW1lbnRzWydwcmljZS1taW4nXS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1taW4nKSApIHtcclxuXHJcblx0XHRcdFx0XHRmb3JtRGF0YS5kZWxldGUoJ3ByaWNlLW1pbicpO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCBmaWx0ZXIuZWxlbWVudHNbJ3ByaWNlLW1heCddLnZhbHVlID09PSBmaWx0ZXIuZWxlbWVudHNbJ3ByaWNlLW1heCddLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpICkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm1EYXRhLmRlbGV0ZSgncHJpY2UtbWF4Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzdWx0Qm94Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGxvYWRpbmdMYXllcik7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhmb3JtRGF0YSkudG9TdHJpbmcoKTtcclxuXHJcblx0XHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUodW5kZWZpbmVkLCAnJywgJz8nICsgcXVlcnlTdHJpbmcpO1xyXG5cclxuXHRcdFx0XHRmZXRjaChmaWx0ZXIuZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRib2R5OiBmb3JtRGF0YVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG5cdFx0XHRcdC50aGVuKGh0bWwgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGxvYWRpbmdMYXllci5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdHJlc3VsdEJveC5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBzdWJtaXRcclxuXHJcblx0XHRmaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItb3BlbicpO1xyXG5cclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGZpbHRlci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gZGVmYXVsdCByZXNldFxyXG5cclxuXHRcdGZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdkZWZhdWx0JywgKCkgPT4ge1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShmaWx0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94X19pbnB1dDpjaGVja2VkOm5vdCg6ZGlzYWJsZWQpJyksIGNoZWNrYm94ID0+IGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZSk7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGZpbHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubm91aXNsaWRlcicpLCBub3Vpc2xpZGVyID0+IG5vdWlzbGlkZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNldFwiKSkpO1xyXG5cclxuXHRcdFx0ZmlsdGVyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0Ly8gZmlsdGVyLXRhZ3MtdHJpZ2dlclxyXG5cclxuXHRcdHJlc3VsdEJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRhZyA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZmlsdGVyLXRhZ3MtdHJpZ2dlcl9fdGFnJyk7XHJcblxyXG5cdFx0XHRpZiAoIHRhZyApIHtcclxuXHJcblx0XHRcdFx0aWYoIHRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci10YWdzLXRyaWdnZXJfX3RhZy0tcmVzZXQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJkZWZhdWx0XCIpKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBuYW1lID0gdGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyksXHJcblx0XHRcdFx0XHRcdCAgdmFsdWUgPSB0YWcuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobmFtZSx2YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBuYW1lID09PSBcIm5vdWlzbGlkZXJcIiApIHtcclxuXHJcblx0XHRcdFx0XHRcdGZpbHRlci5xdWVyeVNlbGVjdG9yKCcubm91aXNsaWRlci0tJyArIHZhbHVlKS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlc2V0XCIpKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtuYW1lfVwiXVt2YWx1ZT1cIiR7dmFsdWV9XCJdYCkuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXInKSk7XHJcblxyXG5cclxuXHJcbi8vIGZpbHRlci1zb3J0LXRyaWdnZXIgZGVza3RvcFxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYoZm9ybS5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGZvcm0sIGZvcm0gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBmb3JtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSxcclxuXHRcdFx0XHQgIGJ0bnNSYWRpbyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRfX2l0ZW0nKSxcclxuXHRcdFx0XHQgIGRpcmVjdGlvbiA9IGZvcm0uZWxlbWVudHMuZGlyZWN0aW9uO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbSggYnRuc1JhZGlvLCBidG4gPT4ge1xyXG5cclxuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiggYnRuLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiggYnRuLmNsYXNzTGlzdC5jb250YWlucygnaXMtcmV2ZXJ0JykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1yZXZlcnQnKTtcclxuXHRcdFx0XHRcdFx0XHRmaWx0ZXIuZWxlbWVudHMuZGlyZWN0aW9uLnZhbHVlID0gZGlyZWN0aW9uLnZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2lzLXJldmVydCcpO1xyXG5cdFx0XHRcdFx0XHRcdGZpbHRlci5lbGVtZW50cy5kaXJlY3Rpb24udmFsdWUgPSBkaXJlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWFsdCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRidG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGZvcm0ucXVlcnlTZWxlY3RvcignLnNvcnRfX2l0ZW0gc3ZnJykpO1xyXG5cclxuXHRcdFx0XHRcdFx0QXJyYXkuZnJvbSggYnRuc1JhZGlvLCBfYnRuID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0X2J0bi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnLCBidG4gPT09IF9idG4pO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGZpbHRlci5lbGVtZW50cy5zb3J0LnZhbHVlID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG5cclxuXHRcdFx0XHRcdGZpbHRlci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlci1zb3J0LXRyaWdnZXInKSk7XHJcblxyXG5cclxuLy8gZmlsdGVyLXNvcnQtdHJpZ2dlciBtb2JpbGVcclxuXHJcbiggZm9ybSA9PiB7XHJcblxyXG5cdGlmKGZvcm0pIHtcclxuXHJcblx0XHRjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRmaWx0ZXIuZWxlbWVudHMuZGlyZWN0aW9uLnZhbHVlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1kaXJlY3Rpb24nKTtcclxuXHRcdFx0ZmlsdGVyLmVsZW1lbnRzLnNvcnQudmFsdWUgPSBmb3JtLmVsZW1lbnRzLnNvcnQudmFsdWU7XHJcblxyXG5cdFx0XHRmaWx0ZXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gY2F0YWxvZ19fc29ydC1idG4tbW9iaWxlXHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHQvLyBzb3J0XHJcblxyXG5cdFx0XHRjb25zdCBpc1NvcnQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2dfX3NvcnQtYnRuLW1vYmlsZS0tc29ydCcpO1xyXG5cclxuXHRcdFx0aWYgKCBpc1NvcnQgKSB7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtb3BlbicpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbHRlci1zb3J0LXRyaWdnZXItbW9iaWxlJykgPT09IG51bGwgKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGZpbHRlclxyXG5cclxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2dfX3NvcnQtYnRuLW1vYmlsZS0tZmlsdGVyJykgKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLW9wZW4nKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5maWx0ZXJfX2J0bi1jbG9zZScpICkge1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlci1vcGVuJyk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItc29ydC10cmlnZ2VyLW1vYmlsZScpKTsiLCIoIG1vZGFsQ2FydCA9PiB7XHJcblxyXG5cdGlmICggIW1vZGFsQ2FydCApIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0Y29uc3QgbW9kYWxDYXJ0VGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY2FydC10ZW1wbGF0ZScpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZm9ybS1idXknKTtcclxuXHJcblx0XHRpZiAoZm9ybSkge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuU3VibWl0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXlfX3N1Ym1pdCcpO1xyXG5cclxuXHRcdFx0YnRuU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRmb3JtLmNsYXNzTGlzdC5hZGQoJ2lzLWxvYWRpbmcnKTtcclxuXHJcblx0XHRcdGZldGNoKGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKSwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0XHRidG5TdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LmlubmVySFRNTCA9IE11c3RhY2hlLnJlbmRlcihtb2RhbENhcnRUZW1wbGF0ZS5pbm5lckhUTUwsIHJlc3VsdCk7XHJcblxyXG5cdFx0XHRcdC8vINC/0L7QutCw0LfQsNGC0Ywg0LzQvtC00LDQu9C60YNcclxuXHJcblx0XHRcdFx0Y29uc3QgZXZlbnRNb2RhbFNob3cgPSBuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbFNob3dcIiwge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdG9yOiBcImNhcnRcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR3aW5kb3cubW9kYWwuZGlzcGF0Y2hFdmVudChldmVudE1vZGFsU2hvdyk7XHJcblxyXG5cdFx0XHRcdC8vINCyINGI0LDQv9C60LVcclxuXHJcblx0XHRcdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zZXQtY2FydC1jb3VudGVyJyldLmZvckVhY2goIGVsID0+IGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb3VudGVyJywgcmVzdWx0LnRvdGFsQ2FydCkgKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIHVwZGF0ZSBjb3VudFxyXG5cclxuXHRtb2RhbENhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdG1vZGFsQ2FydC5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0ZmV0Y2gobW9kYWxDYXJ0LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShtb2RhbENhcnQpXHJcblx0XHR9KVxyXG5cdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cdFx0XHRtb2RhbENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0aWYgKCByZXN1bHQuaWQgPT0gbW9kYWxDYXJ0LmVsZW1lbnRzLmlkLnZhbHVlICkge1xyXG5cclxuXHRcdFx0XHQvLyDRh9Cw0YHRgtC40YfQvdGL0LlcclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19jb3VudCcpLnZhbHVlID0gcmVzdWx0LmNvdW50O1xyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9fdG90YWwtdGV4dCcpLnRleHRDb250ZW50ID0gcmVzdWx0LnRvdGFsVGV4dDtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vINC/0L7Qu9C90YvQuSDRgNC10L3QtNC10YBcclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LmVsZW1lbnRzLmlkLnZhbHVlID0gcmVzdWx0LmlkO1xyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX2ltZycpLmhyZWYgPSByZXN1bHQubGluaztcclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX2ltZyBpbWcnKS5zcmMgPSByZXN1bHQuaW1nO1xyXG5cclxuXHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnRfX25hbWUnKS5ocmVmID0gcmVzdWx0Lmxpbms7XHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19uYW1lJykudGV4dENvbnRlbnQgPSByZXN1bHQubmFtZTtcclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19pbnRybycpLnRleHRDb250ZW50ID0gcmVzdWx0LmRlc2NyaXB0aW9uO1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlc3VsdC5wcmljZU9sZCAmJiBtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKSApIHtcclxuXHJcblx0XHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLnByaWNlX19zYWxlJykudGV4dENvbnRlbnQgPSByZXN1bHQucHJpY2U7XHJcblx0XHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLnByaWNlX19vbGQnKS50ZXh0Q29udGVudCA9IHJlc3VsdC5wcmljZU9sZDtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLnByaWNlJykudGV4dENvbnRlbnQgPSByZXN1bHQucHJpY2U7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jYXJ0X19jb3VudCcpLnZhbHVlID0gcmVzdWx0LmNvdW50O1xyXG5cdFx0XHRcdG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydF9fdG90YWwtdGV4dCcpLnRleHRDb250ZW50ID0gcmVzdWx0LnRvdGFsVGV4dDtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsQ2FydC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRtb2RhbENhcnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWxDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50LmtleSk7XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdxdWFudGl0eV9faW5wdXQnKSApIHtcclxuXHJcblx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXFxEXS9nLCAnJyk7XHJcblxyXG5cdFx0XHRtb2RhbENhcnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdG1vZGFsQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpbnB1dCA9IG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcucXVhbnRpdHlfX2lucHV0Jyk7XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQgPT09IGlucHV0ICkge1xyXG5cclxuXHRcdFx0aW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnF1YW50aXR5X19idG4tLXVwJykgKSB7XHJcblxyXG5cdFx0XHRpbnB1dC52YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlKSArIDE7XHJcblxyXG5cdFx0XHRtb2RhbENhcnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucXVhbnRpdHlfX2J0bi0tZG93bicpICkge1xyXG5cclxuXHRcdFx0aW5wdXQudmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSkgPD0gMSA/IDEgOiBwYXJzZUludChpbnB1dC52YWx1ZSkgLSAxO1xyXG5cclxuXHRcdFx0bW9kYWxDYXJ0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnQnKSk7IiwiKCBmb3JtQ2l0eSA9PiB7XHJcblxyXG5cdGlmICggIWZvcm1DaXR5ICkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBsaXN0ID0gZm9ybUNpdHkucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eV9fbGlzdCcpLFxyXG5cdFx0ICBidG5MaXN0ID0gbGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jaXR5X19idG4nKSxcclxuXHRcdCAgZm9ybUNpdHlJbnB1dCA9IGZvcm1DaXR5LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX2lucHV0LWZpbHRlcicpO1xyXG5cclxuXHRsZXQgY291bnRWaXNpYmxlID0gYnRuTGlzdC5sZW5ndGg7XHJcblxyXG5cdGNvbnN0IHN1Ym1pdCA9ICgpPT4ge1xyXG5cclxuXHRcdGZldGNoKGZvcm1DaXR5LmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtQ2l0eSlcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcblx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblx0XHRcdGlmICggcmVzdWx0LnNldENpdHkgKSB7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWNoYW5nZS1jaXR5JyksIGVsID0+IGVsLnRleHRDb250ZW50ID0gcmVzdWx0LnNldENpdHkpO1xyXG5cclxuXHRcdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGZvcm1DaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgdmFsdWUgPSBmb3JtQ2l0eUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0Y291bnRWaXNpYmxlID0gMDtcclxuXHJcblx0XHRpZih2YWx1ZS5sZW5ndGggPiAwKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bkxpc3QsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRcdFx0XHRidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIG5hbWUuaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuXHJcblx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YodmFsdWUpICE9PSAtMSApIHtcclxuXHJcblx0XHRcdFx0XHRjb3VudFZpc2libGUrKztcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYnRuTGlzdCwgYnRuID0+IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xyXG5cclxuXHRcdFx0Y291bnRWaXNpYmxlID0gYnRuTGlzdC5sZW5ndGg7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtZW1wdHknLCBjb3VudFZpc2libGUgPT09IDApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0QXJyYXkuZnJvbShidG5MaXN0LCBidG4gPT4ge1xyXG5cclxuXHRcdGJ0bi5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jaXR5X19yYWRpbycpLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiBzdWJtaXQoKSApO1xyXG5cclxuXHR9KTtcclxuXHJcblx0Zm9ybUNpdHkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKCBjb3VudFZpc2libGUgPT09IDEgKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKCBidG5MaXN0LCBidG4gPT4gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNpdHlfX3JhZGlvJykuY2hlY2tlZCA9IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSA9PT0gZmFsc2UgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBmb3JtQ2l0eUlucHV0LnZhbHVlLmxlbmd0aCA+IDAgKSB7XHJcblxyXG5cdFx0XHRzdWJtaXQoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY2l0eScpKTsiLCIoIGl0ZW1zID0+IHtcclxuXHJcblx0aWYoIWl0ZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRBcnJheS5mcm9tKGl0ZW1zLCBmb3JtID0+IHtcclxuXHJcblx0XHRjb25zdCBidG4gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19zdWJtaXQnKSxcclxuXHRcdFx0ICBva1RleHQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19vaycpLFxyXG5cdFx0XHQgIGVycm9yVGV4dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmZvcm1fX2Vycm9yJyk7XHJcblxyXG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Zm9ybS5jbGFzc0xpc3QuYWRkKCdpcy1sb2FkaW5nJyk7XHJcblx0XHRcdGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRmZXRjaChmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJyksIHtcclxuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuXHRcdFx0XHRmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHRidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vIGluZm8gbW9kYWxcclxuXHJcblx0XHRcdFx0aWYocmVzdWx0LnR5cGUgPT09ICdvaycpIHtcclxuXHJcblx0XHRcdFx0XHRtb2RhbC5vayhyZXN1bHQudGl0bGUsIHJlc3VsdC50ZXh0KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdC8vIG9rIGluIGZvcm1cclxuXHJcblx0XHRcdFx0aWYob2tUZXh0KSB7XHJcblxyXG5cdFx0XHRcdFx0aWYocmVzdWx0LnR5cGUgPT09ICdmb3JtLW9rJykge1xyXG5cclxuXHRcdFx0XHRcdFx0b2tUZXh0LmlubmVySFRNTCA9IHJlc3VsdC50ZXh0O1xyXG5cdFx0XHRcdFx0XHRva1RleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIXdpbmRvdy5pc0luVmlld3BvcnQob2tUZXh0KSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdG9rVGV4dC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQudXJsICE9PSAnZm9yZ290Jykge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBsb2NhdGlvbi5ocmVmID0gcmVzdWx0LnVybCwgNDAwMCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdG9rVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBlcnJvciBpbiBmb3JtXHJcblxyXG5cdFx0XHRcdGlmKGVycm9yVGV4dCkge1xyXG5cclxuXHRcdFx0XHRcdGlmKHJlc3VsdC50eXBlID09PSAnZm9ybS1lcnJvcicpIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5pbm5lckhUTUwgPSByZXN1bHQudGV4dDtcclxuXHRcdFx0XHRcdFx0ZXJyb3JUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmKCF3aW5kb3cuaXNJblZpZXdwb3J0KGVycm9yVGV4dCkpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRlcnJvclRleHQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGVycm9yVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyByZWRpcmVjdFxyXG5cclxuXHRcdFx0XHRpZihyZXN1bHQucmVkaXJlY3QpIHtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBkZWxheSA9IHJlc3VsdC5yZWRpcmVjdERlbGF5ID8gcmVzdWx0LnJlZGlyZWN0RGVsYXkgKiAxMDAwIDogMDtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKT0+IGxvY2F0aW9uLmFzc2lnbihyZXN1bHQucmVkaXJlY3QpLCBkZWxheSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHJlc2V0XHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZXNldCkge1xyXG5cclxuXHRcdFx0XHRcdGZvcm0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gcmVsb2FkXHJcblxyXG5cdFx0XHRcdGlmKHJlc3VsdC5yZWZyZXNoKSB7XHJcblxyXG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtJykpOyIsIiggaW1nID0+IHtcclxuXHJcblx0aWYoaW1nKSB7XHJcblxyXG5cdFx0Y29uc3QgYmlnID0gaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ1ZJREVPJyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCApIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlkZW8nKTtcclxuXHRcdFx0XHRldmVudC50YXJnZXQucGF1c2VkID8gZXZlbnQudGFyZ2V0LnBsYXkoKSA6IGV2ZW50LnRhcmdldC5wYXVzZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19saW5rJykpIHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnN3aXBlci1jb250YWluZXItc3R5bGUnKSA9PT0gbnVsbCApe1xyXG5cclxuXHRcdFx0XHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyk7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20oaW1nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19pdGVtJyksIChlbCxpbmRleCkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWN1cnJlbnQnLCBpdGVtID09PSBlbCk7XHJcblx0XHRcdFx0XHRiaWdbaW5kZXhdLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWhpZGUnLCBpdGVtICE9PSBlbCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoYmlnW2luZGV4XS5xdWVyeVNlbGVjdG9yKCd2aWRlbycpKXtcclxuXHJcblx0XHRcdFx0XHRcdGJpZ1tpbmRleF0ucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wYXVzZSgpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JykpOyIsIiggaGVhZGVyID0+IHtcclxuXHJcblx0aWYoaGVhZGVyKSB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHRIZWFkZXJGaXhlZCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlaWdodEhlYWRlcicpKTtcclxuXHJcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTI1MCkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaGVhZGVyQm90dG9tID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JvdHRvbScpLFxyXG5cdFx0XHQgIGhlYWRlckJvdHRvbUlubmVyID0gaGVhZGVyQm90dG9tLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2ZsZXgnKTtcclxuXHJcblx0XHRjb25zdCBwcm9kdWN0U2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2Nyb2xsJyksXHJcblx0XHRcdCAgcHJvZHVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fZm9ybS1idXknKTtcclxuXHJcblx0XHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XHJcblxyXG5cdFx0aWYgKCBwcm9kdWN0U2Nyb2xsICkge1xyXG5cclxuXHRcdFx0aGVhZGVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBwcm9kdWN0U2Nyb2xsKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCAxMjUwKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICkge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItZml4ZWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWlnaHRIZWFkZXJGaXhlZCcsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctLWhlaWdodEhlYWRlcicpKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHQvLyBwcm9kdWN0IHNjcm9sbFxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJvZHVjdFNjcm9sbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICggd2luZG93LmlubmVyV2lkdGggPCA3NjggKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICYmIHdpbmRvdy5wYWdlWU9mZnNldCA+IDAgKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgbWF4ID0gaGVhZGVyQm90dG9tSW5uZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdGxldCBoID0gbWF4IC0gd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG5cdFx0XHRcdFx0XHRvID0gKCBtYXggLyAyIC0gd2luZG93LnBhZ2VZT2Zmc2V0ICkgLyAoIG1heCAvIDIgKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGggPCAwICkge1xyXG5cclxuXHRcdFx0XHRcdFx0aCA9IDA7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggbyA8IDAgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRvID0gMDtcclxuXHRcdFx0XHRcdFx0aGVhZGVyQm90dG9tSW5uZXIuY2xhc3NMaXN0LmFkZCgnaXMtb2ZmJyk7XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdGhlYWRlckJvdHRvbUlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9mZicpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRoZWFkZXJCb3R0b20uc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcblx0XHRcdFx0XHRoZWFkZXJCb3R0b20uc3R5bGUub3BhY2l0eSA9IG87XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodEhlYWRlcicsIGhlYWRlci5jbGllbnRIZWlnaHQgKyAncHgnKTtcclxuXHJcblx0XHRcdFx0XHQvLyBwcm9kdWN0IHNjcm9sbFxyXG5cclxuXHRcdFx0XHRcdGlmICggcHJvZHVjdFNjcm9sbCApIHtcclxuXHJcblx0XHRcdFx0XHRcdHByb2R1Y3RTY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvdycsIHdpbmRvdy5pc0luVmlld3BvcnQocHJvZHVjdEZvcm0pID09PSBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpKTsiLCIvLyDRg9C00LDQu9C10L3QuNC1INCw0LTRgNC10YHQsFxyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYgKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tYWRkcmVzcy1yZW1vdmUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9naW5fX3RleHQnKS50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPVwiYWNjb3VudC1hZGRyZXNzLXJlbW92ZVwiXScpKTtcclxuXHJcbi8vINGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLRi1xyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYgKCBidG5zLmxlbmd0aCApIHtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZvcm0tY2FyZC1yZW1vdmUnKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdGZvcm0uZWxlbWVudHMuaWQudmFsdWUgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcubW9kYWwtbG9naW5fX3RleHQnKS50ZXh0Q29udGVudCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsPVwiYWNjb3VudC1jYXJkLXJlbW92ZVwiXScpKTtcclxuXHJcbi8vIGZpbHRlclxyXG5cclxuKCBmb3JtID0+IHtcclxuXHJcblx0aWYgKCBmb3JtICkge1xyXG5cclxuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZm9ybS5zdWJtaXQpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGstZmlsdGVyJykpO1xyXG5cclxuLy8g0YDQsNC30LLQtdGA0L3Rg9GC0Ywg0LfQsNC60LDQt1xyXG5cclxuKCBsaXN0ID0+IHtcclxuXHJcblx0aWYgKCBsaXN0Lmxlbmd0aCApIHtcclxuXHJcblx0XHRBcnJheS5mcm9tKGxpc3QsIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgYnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcubGstb3JkZXJfX2Zvb3QgLmJ0bicpO1xyXG5cclxuXHRcdFx0aWYgKCBidG4gKSB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc2hvcnQnKSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5say1vcmRlcicpKTsiLCIoIGVsZW1zID0+IHtcblxuXHRpZighZWxlbXMubGVuZ3RoKSB7XG5cblx0XHRyZXR1cm47XG5cblx0fVxuXG5cdGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRzY3JpcHQuc3JjID0gJy9qcy9pbnB1dG1hc2subWluLmpzJztcblx0c2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcblxuXHRcdEFycmF5LmZyb20oZWxlbXMsIGVsID0+IHtcblxuXHRcdFx0bGV0IG1hc2tJbnB1dDtcblxuXHRcdFx0aWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnB1dG1hc2stLXBob25lJykpIHtcblxuXHRcdFx0XHRtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcblx0XHRcdFx0XHRtYXNrOiBcIis3ICg5OTkpIDk5OSA5OSA5OVwiLFxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2Vcblx0XHRcdFx0fSk7XG5cblx0XHRcdH1cblxuXHRcdFx0bWFza0lucHV0Lm1hc2soZWwpO1xuXG5cdFx0fSk7XG5cblx0fTtcblxuXHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCksIENvb2tpZXMuZ2V0KCdmYXN0TG9hZFNjcmlwdCcpID8gMCA6IDEwMDAwKTtcblxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCIoIHdpbmRvd1Njcm9sbCA9PiB7XHJcblxyXG4vLyBidG4gdG9nZ2xlXHJcblxyXG5cdCggYnRuID0+IHtcclxuXHJcblx0XHRpZihidG4pIHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXNob3cnKSApIHtcclxuXHJcblx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpKTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtZW51LXNob3cnKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyLWZpeGVkJyk7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpO1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1tZW51LXRvZ2dsZScpKTtcclxuXHJcblxyXG5cdC8vIG1lbnUgY2F0YWxvZ1xyXG5cclxuXHQoIGJ0bnMgPT4ge1xyXG5cclxuXHRcdGlmKGJ0bnMubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRBcnJheS5mcm9tKGJ0bnMsIGJ0biA9PiB7XHJcblxyXG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRpZiggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtY2F0YWxvZy1zaG93JykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtY2F0YWxvZy1zaG93JywnbWVudS1zaG93Jyk7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLHdpbmRvd1Njcm9sbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLWJlaGF2aW9yLW9mZicpKTtcclxuXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LXNob3cnKSA9PT0gZmFsc2UgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHdpbmRvd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXRhbG9nLXNob3cnKTtcclxuXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoICgpID0+IHdpbmRvdy5zY3JvbGxUbygwLDApKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLXRvZ2dsZS1tZW51LWNhdGFsb2cnKSk7XHJcblxyXG59KSh3aW5kb3cucGFnZVlPZmZzZXQpO1xyXG5cclxuXHJcbi8vIG1lbnUgc2VydmljZVxyXG5cclxuKCBidG5zID0+IHtcclxuXHJcblx0aWYoYnRucy5sZW5ndGgpIHtcclxuXHJcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fYm9keScpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oYnRucywgYnRuID0+IHtcclxuXHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0QXJyYXkuZnJvbShidG5zLCAoX2J0biwgaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRfYnRuLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWN1cnJlbnQnLCBfYnRuID09PSBidG4pO1xyXG5cdFx0XHRcdFx0Ym9keVtpbmRleF0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScsIF9idG4gIT09IGJ0bik7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gbW9iaWxlXHJcblxyXG5cdFx0Y29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX21vYmlsZScpLFxyXG5cdFx0XHQgIG1vYmlsZUJvZHkgPSBtb2JpbGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX21vYmlsZS1ib2R5JyksXHJcblx0XHRcdCAgbW9iaWxlSGVhZCA9IG1vYmlsZU1lbnUucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbW9iaWxlLWhlYWQtbmFtZScpLFxyXG5cdFx0XHQgIG1vYmlsZUJhY2sgPSBtb2JpbGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhdGFsb2dfX21vYmlsZS1idG4tYmFjaycpLFxyXG5cdFx0XHQgIG1vYmlsZUhlYWREZWZhdWx0ID0gbW9iaWxlSGVhZC50ZXh0Q29udGVudDtcclxuXHJcblx0XHRsZXQgbW9iaWxlTGV2ZWwgPSBudWxsLFxyXG5cdFx0XHRpbmRleEJvZHkgPSBudWxsLFxyXG5cdFx0XHRpbmRleExldmVsMSA9IG51bGwsXHJcblx0XHRcdHByZXZMZXZlbDEgPSBudWxsLFxyXG5cdFx0XHRwcmV2TGV2ZWwyID0gbnVsbDtcclxuXHJcblx0XHRjb25zdCBsZXZlbDAgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRtb2JpbGVMZXZlbCA9IDA7XHJcblx0XHRcdG1vYmlsZUJhY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRtb2JpbGVIZWFkLnRleHRDb250ZW50ID0gbW9iaWxlSGVhZERlZmF1bHQ7XHJcblx0XHRcdG1vYmlsZUJvZHkuaW5uZXJIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2F0YWxvZ19fbmF2JykuaW5uZXJIVE1MO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsZXZlbDEgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHRtb2JpbGVMZXZlbCA9IDE7XHJcblx0XHRcdG1vYmlsZUJhY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRtb2JpbGVIZWFkLnRleHRDb250ZW50ID0gcHJldkxldmVsMS50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuXHRcdFx0aHRtbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8bGkgY2xhc3M9XCJtZW51LWNhdGFsb2dfX21vYmlsZS1pdGVtXCI+PGEgaHJlZj1cIiR7cHJldkxldmVsMS5ocmVmfVwiPiR7bW9iaWxlQm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWxsLWl0ZW0nKX08L2E+PC9saT5gKTtcclxuXHJcblx0XHRcdEFycmF5LmZyb20oYm9keVtpbmRleEJvZHldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX2xldmVsLTInKSwgKGxpc3QsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0Y29uc3QgaXRlbSA9IGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19faXRlbScpLFxyXG5cdFx0XHRcdFx0ICBpdGVtQ2xvbmUgPSBpdGVtWzBdLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcblx0XHRcdFx0aXRlbUNsb25lLmNsYXNzTmFtZSA9ICdtZW51LWNhdGFsb2dfX21vYmlsZS1pdGVtJztcclxuXHRcdFx0XHRpdGVtQ2xvbmUuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cdFx0XHRcdGh0bWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBpdGVtQ2xvbmUpO1xyXG5cclxuXHRcdFx0XHRpZiAoIGl0ZW0ubGVuZ3RoID4gMSApIHtcclxuXHJcblx0XHRcdFx0XHRpdGVtQ2xvbmUuY2xhc3NMaXN0LmFkZCgnaXMtcGFyZW50Jyk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bW9iaWxlQm9keS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRtb2JpbGVCb2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgaHRtbCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbGV2ZWwyID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0bW9iaWxlTGV2ZWwgPSAyO1xyXG5cdFx0XHRtb2JpbGVIZWFkLnRleHRDb250ZW50ID0gcHJldkxldmVsMi50ZXh0Q29udGVudDtcclxuXHJcblx0XHRcdGNvbnN0IGh0bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuXHRcdFx0QXJyYXkuZnJvbShib2R5W2luZGV4Qm9keV0ucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtY2F0YWxvZ19fbGV2ZWwtMicpW2luZGV4TGV2ZWwxXS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19pdGVtJyksIGl0ZW0gPT4ge1xyXG5cclxuXHRcdFx0XHRjb25zdCBpdGVtQ2xvbmUgPSBpdGVtLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdFx0XHRpdGVtQ2xvbmUuY2xhc3NOYW1lID0gJ21lbnUtY2F0YWxvZ19fbW9iaWxlLWl0ZW0nO1xyXG5cdFx0XHRcdGh0bWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBpdGVtQ2xvbmUpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX21vYmlsZS1pdGVtIGEnKVswXS50ZXh0Q29udGVudCA9IG1vYmlsZUJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLWFsbC1pdGVtJyk7XHJcblxyXG5cdFx0XHRtb2JpbGVCb2R5LmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRtb2JpbGVCb2R5Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgaHRtbCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldmVsMCgpO1xyXG5cclxuXHRcdG1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRjb25zdCBidG5MZXZlbDEgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1lbnUtY2F0YWxvZ19fbmF2LWJ0bicpLFxyXG5cdFx0XHRcdCAgYnRuTGV2ZWwyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tZW51LWNhdGFsb2dfX21vYmlsZS1pdGVtLmlzLXBhcmVudCcpO1xyXG5cclxuXHRcdFx0aWYgKCBidG5MZXZlbDEgKSB7XHJcblxyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdHByZXZMZXZlbDEgPSBidG5MZXZlbDE7XHJcblxyXG5cdFx0XHRcdEFycmF5LmZyb20obW9iaWxlQm9keS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1jYXRhbG9nX19uYXYtYnRuJyksIChpdGVtLGluZGV4KSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBidG5MZXZlbDEgPT09IGl0ZW0gKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpbmRleEJvZHkgPSBpbmRleDtcclxuXHRcdFx0XHRcdFx0bGV2ZWwxKCk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggYnRuTGV2ZWwyICkge1xyXG5cclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRwcmV2TGV2ZWwyID0gYnRuTGV2ZWwyO1xyXG5cclxuXHRcdFx0XHRpbmRleExldmVsMSA9IHBhcnNlSW50KCBidG5MZXZlbDIuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykgKTtcclxuXHJcblx0XHRcdFx0bGV2ZWwyKCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9iaWxlQmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vYmlsZUxldmVsID09PSAyID8gbGV2ZWwxKCkgOiBsZXZlbDAoKSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWNhdGFsb2dfX25hdi1idG4nKSk7IiwiKCBtb2RhbCA9PiB7XHJcblxyXG5cdGlmKCFtb2RhbCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9faXRlbScpLFxyXG5cdFx0ICBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHQgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG5cclxuXHRsZXQgYWN0aXZlTW9kYWwgPSBudWxsLFxyXG5cdFx0d2luZG93U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtc2hvdycpO1xyXG5cdFx0d3JhcHBlci5zdHlsZS50b3AgPSAwO1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsd2luZG93U2Nyb2xsKTtcclxuXHRcdGFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRpZihldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuXHJcblx0XHRcdG1vZGFsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaGlkZVwiKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Y29uc3QgbW9kYWxTaG93ID0gc2VsZWN0b3IgPT4ge1xyXG5cclxuXHRcdGlmKCFhY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGFjdGl2ZU1vZGFsID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS0nICsgc2VsZWN0b3IpO1xyXG5cclxuXHRcdEFycmF5LmZyb20oaXRlbXMsIGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwgIT09IGFjdGl2ZU1vZGFsKSk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1iZWhhdmlvci1vZmYnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsMCk7XHJcblxyXG5cdFx0XHRhY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHRcdFx0UHViU3ViLnB1Ymxpc2goJ29wZW4tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcblxyXG5cdFx0aWYoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbF9fY2xvc2UnKSl7XHJcblxyXG5cdFx0XHRtb2RhbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImhpZGVcIikpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG5cdFx0d2hpbGUgKHRhcmdldCAhPT0gZG9jdW1lbnQgJiYgdGFyZ2V0ICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tb2RhbCcpKSB7XHJcblxyXG5cdFx0XHRcdG1vZGFsU2hvdyh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0bW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kYWxTaG93JywgZXZlbnQgPT4gbW9kYWxTaG93KGV2ZW50LmRldGFpbC5zZWxlY3RvcikpO1xyXG5cclxuXHRtb2RhbC5vayA9ICh0aXRsZSwgdGV4dCkgPT4ge1xyXG5cclxuXHRcdG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tb2sgLm1vZGFsLWxvZ2luX19oZWFkJykuaW5uZXJIVE1MID0gdGl0bGUgPyB0aXRsZSA6ICcnO1xyXG5cdFx0bW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pdGVtLS1vayAubW9kYWwtbG9naW5fX3RleHQnKS5pbm5lckhUTUwgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG5cdFx0bW9kYWxTaG93KCdvaycpO1xyXG5cclxuXHR9XHJcblxyXG59KShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSk7IiwiKCBub3Vpc2xpZGVyID0+IHtcclxuXHJcblx0aWYoIW5vdWlzbGlkZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IG5vVWlTbGlkZXJJbml0ID0gKCkgPT4ge1xyXG5cclxuXHRcdEFycmF5LmZyb20obm91aXNsaWRlciwgc2xpZGVyID0+IHtcclxuXHJcblx0XHRcdGNvbnN0IHRyYWNrID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5ub3Vpc2xpZGVyX190cmFjaycpLFxyXG5cdFx0XHRcdCAgZm9ybSA9IHNsaWRlci5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHRcdFx0ICBtaW5JbnB1dCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcubm91aXNsaWRlcl9fbWluJyksXHJcblx0XHRcdFx0ICBtYXhJbnB1dCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcubm91aXNsaWRlcl9fbWF4JyksXHJcblx0XHRcdFx0ICBtaW5JbnB1dE5hbWUgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXJfX21pbi1uYW1lJyksXHJcblx0XHRcdFx0ICBtYXhJbnB1dE5hbWUgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXJfX21heC1uYW1lJyksXHJcblx0XHRcdFx0ICBtaW4gICA9IHBhcnNlSW50KHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykpLFxyXG5cdFx0XHRcdCAgbWF4ICAgPSBwYXJzZUludChzbGlkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLW1heCcpKSxcclxuXHRcdFx0XHQgIHN0ZXAgID0gcGFyc2VJbnQoc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGVwJykpLFxyXG5cdFx0XHRcdCAgc3VmICA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3VmJyk7XHJcblxyXG5cdFx0XHRub1VpU2xpZGVyLmNyZWF0ZSh0cmFjaywge1xyXG5cdFx0XHRcdHN0YXJ0OiBbbWluLG1heF0sXHJcblx0XHRcdFx0c3RlcDogc3RlcCxcclxuXHRcdFx0XHRjb25uZWN0OiB0cnVlLFxyXG5cdFx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHQnbWluJzogbWluLFxyXG5cdFx0XHRcdFx0J21heCc6IG1heFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Zm9ybWF0OiB7XHJcblx0XHRcdFx0XHR0bzogdmFsdWUgPT4gcGFyc2VJbnQodmFsdWUpLFxyXG5cdFx0XHRcdFx0ZnJvbTogdmFsdWUgPT4gcGFyc2VJbnQodmFsdWUpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRyYWNrLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgdmFsdWVzID0+IHtcclxuXHJcblx0XHRcdFx0aWYoIHN1ZiApIHtcclxuXHJcblx0XHRcdFx0XHRtaW5JbnB1dC52YWx1ZSA9IHdpbmRvdy5zZXBOdW1iZXIodmFsdWVzWzBdKSArICcgJyArIHN1ZjtcclxuXHRcdFx0XHRcdG1heElucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih2YWx1ZXNbMV0pICsgJyAnICsgc3VmO1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdG1pbklucHV0LnZhbHVlID0gcGFyc2VJbnQodmFsdWVzWzBdKTtcclxuXHRcdFx0XHRcdG1heElucHV0LnZhbHVlID0gcGFyc2VJbnQodmFsdWVzWzFdKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCdlbmQnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaWRlJywgbWluID09PSB2YWx1ZXNbMF0pO1xyXG5cdFx0XHRcdG1heElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNpZGUnLCBtYXggPT09IHZhbHVlc1sxXSk7XHJcblxyXG5cdFx0XHRcdGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dE5hbWUudmFsdWUgPSB2YWx1ZXNbMF07XHJcblx0XHRcdFx0bWF4SW5wdXROYW1lLnZhbHVlID0gdmFsdWVzWzFdO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0cmFjay5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCB2YWx1ZXMgPT4ge1xyXG5cclxuXHRcdFx0XHRtaW5JbnB1dC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zaWRlJywgbWluID09PSB2YWx1ZXNbMF0pO1xyXG5cdFx0XHRcdG1heElucHV0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNpZGUnLCBtYXggPT09IHZhbHVlc1sxXSk7XHJcblxyXG5cdFx0XHRcdG1pbklucHV0TmFtZS52YWx1ZSA9IHZhbHVlc1swXTtcclxuXHRcdFx0XHRtYXhJbnB1dE5hbWUudmFsdWUgPSB2YWx1ZXNbMV07XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRcdFx0dHJhY2subm9VaVNsaWRlci5zZXQoW21pbixtYXhdKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdHRyYWNrLm5vVWlTbGlkZXIuc2V0KFttaW4sbWF4XSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZXZlbnQudGFyZ2V0ID09PSBtYXhJbnB1dCB8fCBldmVudC50YXJnZXQgPT09IG1pbklucHV0KSB7XHJcblxyXG5cdFx0XHRcdFx0dHJhY2subm9VaVNsaWRlci5zZXQoW1xyXG5cdFx0XHRcdFx0XHRwYXJzZUludCh3aW5kb3cuc3RyVG9OdW1iZXIobWluSW5wdXQudmFsdWUpKSxcclxuXHRcdFx0XHRcdFx0cGFyc2VJbnQod2luZG93LnN0clRvTnVtYmVyKG1heElucHV0LnZhbHVlKSlcclxuXHRcdFx0XHRcdF0pO1xyXG5cclxuXHRcdFx0XHRcdG1pbklucHV0TmFtZS52YWx1ZSA9IHZhbHVlc1swXTtcclxuXHRcdFx0XHRcdG1heElucHV0TmFtZS52YWx1ZSA9IHZhbHVlc1sxXTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bWluSW5wdXQudmFsdWUgPSB0cmFjay5ub1VpU2xpZGVyLmdldCgpWzBdO1xyXG5cdFx0XHRcdG1pbklucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOTkpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuXHJcblx0XHRcdFx0bWF4SW5wdXQudmFsdWUgPSB0cmFjay5ub1VpU2xpZGVyLmdldCgpWzFdO1xyXG5cdFx0XHRcdG1heElucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsOTkpO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiggc3VmICkge1xyXG5cclxuXHRcdFx0XHRcdG1pbklucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih0cmFjay5ub1VpU2xpZGVyLmdldCgpWzBdKSArICcgJyArIHN1ZjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRpZiggc3VmICkge1xyXG5cclxuXHRcdFx0XHRcdG1heElucHV0LnZhbHVlID0gd2luZG93LnNlcE51bWJlcih0cmFjay5ub1VpU2xpZGVyLmdldCgpWzFdKSArICcgJyArIHN1ZjtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRcdFx0aWYoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuXHJcblx0XHRcdFx0XHRtaW5JbnB1dC5ibHVyKCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcblxyXG5cdFx0XHRcdGlmKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcblxyXG5cdFx0XHRcdFx0bWF4SW5wdXQuYmx1cigpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHRtaW4gIT09IHBhcnNlSW50KHdpbmRvdy5zdHJUb051bWJlcihtaW5JbnB1dC52YWx1ZSkpIHx8XHJcblx0XHRcdFx0bWF4ICE9PSBwYXJzZUludCh3aW5kb3cuc3RyVG9OdW1iZXIobWF4SW5wdXQudmFsdWUpKVxyXG5cdFx0XHQpIHtcclxuXHJcblx0XHRcdFx0dHJhY2subm9VaVNsaWRlci5zZXQoW1xyXG5cdFx0XHRcdFx0cGFyc2VJbnQod2luZG93LnN0clRvTnVtYmVyKG1pbklucHV0LnZhbHVlKSksXHJcblx0XHRcdFx0XHRwYXJzZUludCh3aW5kb3cuc3RyVG9OdW1iZXIobWF4SW5wdXQudmFsdWUpKVxyXG5cdFx0XHRcdF0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvLyBsb2FkXHJcblx0Y29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblx0c2NyaXB0LnNyYyA9ICcvanMvbm91aXNsaWRlci5taW4uanMnO1xyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBub1VpU2xpZGVySW5pdCgpO1xyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdWlzbGlkZXInKSk7IiwiXHJcbiggYnRuUGFnZVVwID0+IHtcclxuXHJcblx0aWYgKGJ0blBhZ2VVcCkge1xyXG5cclxuXHRcdC8vIGNsaWNrXHJcblxyXG5cdFx0YnRuUGFnZVVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9jdW1lbnQuYm9keS5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KSk7XHJcblxyXG5cdFx0Ly8gc2Nyb2xsXHJcblxyXG5cdFx0bGV0IHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcclxuXHJcblx0XHRcdFx0aWYgKCByZXNpemVUaW1lb3V0ID09PSBudWxsICkge1xyXG5cclxuXHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRcdGJ0blBhZ2VVcC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1oaWRkZW4nLCB3aW5kb3cucGFnZVlPZmZzZXQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0XHR9LCAxMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtdXAnKSk7Iiwid2luZG93LnNlbGVjdHMgPSBzZWxlY3QgPT4ge1xyXG5cclxuXHRpZihzZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fbGlzdCcpKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdHZhbHVlLmNsYXNzTmFtZSA9ICdzZWxlY3RfX3ZhbHVlJztcclxuXHR2YWx1ZS5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJzZWxlY3RfX3ZhbHVlLWlubmVyXCI+PC9zcGFuPic7XHJcblxyXG5cdHZhbHVlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNy4yIDkuMmEuNjUuNjUgMCAwIDEgLjkxIDBMMTIgMTMuMTJsMy44OS0zLjk0YS42NS42NSAwIDAgMSAuOTIgMGMuMjUuMjYuMjUuNjggMCAuOTRMMTIgMTVsLTQuOC00Ljg3YS42Ny42NyAwIDAgMSAwLS45NFpcIi8+PC9zdmc+Jyk7XHJcblx0c2VsZWN0LmFwcGVuZENoaWxkKHZhbHVlKTtcclxuXHJcblx0Y29uc3QgZm9ybSA9IHNlbGVjdC5jbG9zZXN0KCdmb3JtJyksXHJcblx0XHRjb250cm9sID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxyXG5cdFx0b3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLFxyXG5cdFx0dmFsdWVUZXh0ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX3ZhbHVlLWlubmVyJyksXHJcblx0XHRmaWx0ZXIgPSBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtLWZpbHRlcicpLFxyXG5cdFx0bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRsaXN0LmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QnO1xyXG5cclxuXHRsZXQgc2VsZWN0ZWQgPSBjb250cm9sLnF1ZXJ5U2VsZWN0b3IoJ1t2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpO1xyXG5cclxuXHRjb25zdCB2YWx1ZURlZmF1bHQgPSBzZWxlY3RlZC50ZXh0Q29udGVudDtcclxuXHJcblx0aWYoIGNvbnRyb2wuZGlzYWJsZWQgfHwgY29udHJvbC52YWx1ZSA9PT0gJ25vbmUnIHx8IGNvbnRyb2wudmFsdWUgPT09ICcnICl7XHJcblxyXG5cdFx0c2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC0tZGVmYXVsdCcpO1xyXG5cclxuXHR9XHJcblxyXG5cdGlmICggY29udHJvbC52YWx1ZSAhPT0gJycgKSB7XHJcblxyXG5cdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT1cIicgKyBjb250cm9sLnZhbHVlICsgJ1wiXScpLnRleHRDb250ZW50O1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20ob3B0aW9uLCBlbCA9PiB7XHJcblxyXG5cdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSxcclxuXHRcdFx0ICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcclxuXHRcdFx0ICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblxyXG5cdFx0YnRuLmNsYXNzTmFtZSA9ICdzZWxlY3RfX2xpc3QtaXRlbSc7XHJcblxyXG5cdFx0aW5wdXQudHlwZSA9ICdyYWRpbyc7XHJcblx0XHRpbnB1dC5uYW1lID0gY29udHJvbC5uYW1lO1xyXG5cdFx0aW5wdXQudmFsdWUgPSBlbC52YWx1ZTtcclxuXHJcblx0XHRsYWJlbC50ZXh0Q29udGVudCA9IGVsLnRleHRDb250ZW50O1xyXG5cclxuXHRcdGlmICggY29udHJvbC52YWx1ZSA9PT0gZWwudmFsdWUgKSB7XHJcblxyXG5cdFx0XHRpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG5cclxuXHRcdFx0dmFsdWVUZXh0LnRleHRDb250ZW50ID0gZWwudGV4dENvbnRlbnQ7XHJcblx0XHRcdHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QtLW9wZW4nKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRidG4uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cdFx0YnRuLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuXHRcdGxpc3QuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcblx0fSk7XHJcblxyXG5cdHNlbGVjdC5hcHBlbmRDaGlsZChsaXN0KTtcclxuXHJcblx0Ly8g0LLQvtC30LLRgNCw0YIg0LIg0LTQtdGE0L7Qu9GC0L3QvtC1INGB0L7RgdGC0L7Rj9C90LjQtSwg0L/RgNC4INGA0LXQt9C10YIg0YTQvtGA0LzRi1xyXG5cclxuXHRmb3JtICYmIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsICgpID0+IHtcclxuXHJcblx0XHRzZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LS1kZWZhdWx0Jyk7XHJcblx0XHR2YWx1ZVRleHQudGV4dENvbnRlbnQgPSB2YWx1ZURlZmF1bHQ7XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyDQvdC1INC/0YDQtdC00YPRgdC80LDRgtGA0LjQstCw0LXQvCDQsiDQvNC+0LHQuNC70LUg0YHQuNGB0YLQtdC80L3Ri9C5INC60L7QvdGC0YDQvtC7XHJcblx0Y29udHJvbC5yZW1vdmUoKTtcclxuXHJcbn07XHJcblxyXG4oICgpID0+IHtcclxuXHJcblx0d2luZG93LnNlbGVjdHNDb2xsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xyXG5cclxuXHRpZih3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24ubGVuZ3RoKSB7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB3aW5kb3cuc2VsZWN0cyhzZWxlY3QpKTtcclxuXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcblx0XHRjb25zdCBpc1NlbGVjdCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0Jyk7XHJcblxyXG5cdFx0QXJyYXkuZnJvbSh3aW5kb3cuc2VsZWN0c0NvbGxlY3Rpb24sIHNlbGVjdCA9PiB7XHJcblxyXG5cdFx0XHRzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0LS1vcGVuJywgc2VsZWN0ID09PSBpc1NlbGVjdCAmJiBpc1NlbGVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC0tb3BlbicpID09PSBmYWxzZSk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxufSkoKTsiLCIoIHN3aXBlckNvbnRhaW5lciA9PiB7XHJcblxyXG5cdGlmKCFzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHR9XHJcblxyXG5cdEFycmF5LmZyb20oc3dpcGVyQ29udGFpbmVyLCBzd2lwZSA9PiB7XHJcblxyXG5cdFx0bGV0IG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuXHRcdFx0ICBzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHQgIHN3aXBlTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHN3aXBlUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxyXG5cdFx0XHQgIHNjcm9sbGJhciA9IHN3aXBlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKSxcclxuXHRcdFx0ICBpdGVtcyA9IHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUnKSxcclxuXHRcdFx0ICBjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ICBjYXJkQXV0byA9IHN3aXBlLmNsYXNzTGlzdC5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci0tY2FyZC1hdXRvJyksXHJcblx0XHRcdCAgYmlsbGJvYXJkID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1iaWxsYm9hcmQnKSxcclxuXHRcdFx0ICBwcm9kdWN0R2FsbGVyeVByZXZpZXcgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWdhbGxlcnktcHJldmlldycpO1xyXG5cclxuXHRcdHN3aXBlTmF2LmNsYXNzTmFtZSA9ICdzd2lwZXItcGFnaW5hdGlvbic7XHJcblx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTmFtZSA9ICdzd2lwZXItY29udHJvbHMnO1xyXG5cclxuXHRcdHN3aXBlQnRucy5jbGFzc05hbWUgPSAnc3dpcGVyLW5hdmlnYXRpb24nO1xyXG5cdFx0c3dpcGVQcmV2LmNsYXNzTmFtZSA9ICdzd2lwZXItYnV0dG9uLXByZXYgYnV0dG9uJztcclxuXHRcdHN3aXBlTmV4dC5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1uZXh0IGJ1dHRvbic7XHJcblxyXG5cdFx0c3dpcGVQcmV2LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsJ1ByZXZpb3VzIHNsaWRlJyk7XHJcblx0XHRzd2lwZU5leHQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywnTmV4dCBzbGlkZScpO1xyXG5cclxuXHRcdGlmICggcHJvZHVjdEdhbGxlcnlQcmV2aWV3ICkge1xyXG5cclxuXHRcdFx0c3dpcGVQcmV2LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwibTEzIDkgNC42IDQuNmExIDEgMCAxIDEtMS40IDEuNGwtMy45LTMuOUw4LjQgMTVBLjk5Ljk5IDAgMCAxIDcgMTMuNkwxMS41OSA5QTEgMSAwIDAgMSAxMyA5WlwiLz48L3N2Zz4nO1xyXG5cdFx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTMgMTVhMSAxIDAgMCAxLTEuNCAwTDcgMTAuNEEuOTkuOTkgMCAwIDEgOC40IDlsMy45IDMuOUwxNi4yIDlhLjk5Ljk5IDAgMCAxIDEuNCAxLjRMMTMgMTVaXCIvPjwvc3ZnPic7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjQxIDExLjVIMThhMSAxIDAgMCAxIDAgMkg4LjQxbDMuOCAzLjhhMSAxIDAgMCAxLTEuNDIgMS40bC01LjUtNS41YTEgMSAwIDAgMSAwLTEuNGw1LjUtNS41YTEgMSAwIDAgMSAxLjQyIDEuNGwtMy44IDMuOFpcIi8+PC9zdmc+JztcclxuXHRcdFx0c3dpcGVOZXh0LmlubmVySFRNTCA9ICc8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTExLjggNS44YTEgMSAwIDAgMCAwIDEuNGwzLjc5IDMuOEg2YTEgMSAwIDAgMCAwIDJoOS41OWwtMy44IDMuOGExIDEgMCAxIDAgMS40MiAxLjRsNS41LTUuNWExIDEgMCAwIDAgLjI5LS42N3YtLjA2YTEgMSAwIDAgMC0uMy0uNjhsLTUuNS01LjVhMSAxIDAgMCAwLTEuNCAwWlwiLz48L3N2Zz4nO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzd2lwZUJ0bnMuYXBwZW5kQ2hpbGQoc3dpcGVQcmV2KTtcclxuXHRcdHN3aXBlQnRucy5hcHBlbmRDaGlsZChzd2lwZU5leHQpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZUJ0bnMpO1xyXG5cdFx0c3dpcGVDb250cm9scy5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblxyXG5cdFx0cmVzZXRTd2lwZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdGlmKG15U3dpcGUpIHtcclxuXHJcblx0XHRcdFx0bXlTd2lwZS5kZXN0cm95KGZhbHNlLHRydWUpO1xyXG5cdFx0XHRcdG15U3dpcGUgPSB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQnRucy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0aWYgKCBzd2lwZS5jbG9zZXN0KCcuc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpICkge1xyXG5cclxuXHRcdFx0XHRzd2lwZS5jbG9zZXN0KCcuc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGJpbGxib2FyZCkge1xyXG5cclxuXHRcdFx0c3dpcGVDb250cm9scy5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZUNvbnRyb2xzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDUwMDBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0XHRcdGVsOiBzd2lwZU5hdixcclxuXHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRidWxsZXRDbGFzczogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdGJ1bGxldEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2FyZEF1dG8pIHtcclxuXHJcblx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMjUwKSB7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGVCdG5zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRcdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzd2lwZXItY29udGFpbmVyLXN0eWxlJyk7XHJcblxyXG5cdFx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHJcblx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwcm9kdWN0R2FsbGVyeVByZXZpZXcpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdHN3aXBlQ29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGNvdW50ID09PSAxICkge1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRlbDogc3dpcGVOYXYsXHJcblx0XHRcdFx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJ1bGxldENsYXNzOiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0XHRidWxsZXRBY3RpdmVDbGFzczogJ2lzLWFjdGl2ZSdcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJykgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJyksIHZpZGVvID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmlkZW8ucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpcy12aWRlbycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZGVvLnBhdXNlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvdW50ID4gNSApIHtcclxuXHJcblx0XHRcdFx0XHRzd2lwZU5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRzd2lwZUJ0bnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cclxuXHRcdFx0XHRcdGxldCBpbml0aWFsU2xpZGUgPSAwLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3ID0gNSxcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuID0gMTU7XHJcblxyXG5cdFx0XHRcdFx0c3dpcGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzd2lwZUNvbnRyb2xzKTtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5mcm9tKGl0ZW1zLCAoZWwsaW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtY3VycmVudCcpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGluaXRpYWxTbGlkZSA9IGluZGV4O1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHN3aXBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc3dpcGVyLWNvbnRhaW5lci1zdHlsZScpO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGJveCA9IHN3aXBlLmNsb3Nlc3QoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3JyksXHJcblx0XHRcdFx0XHRcdCAgYmlnID0gYm94LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItZ2FsbGVyeS1wcmV2aWV3X19iaWctaXRlbScpO1xyXG5cclxuXHRcdFx0XHRcdG15U3dpcGUgPSBuZXcgU3dpcGVyKHN3aXBlLCB7XHJcblx0XHRcdFx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdFx0XHRcdHNsaWRlQWN0aXZlQ2xhc3M6ICdpcy1jdXJyZW50JyxcclxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3IDogc2xpZGVzUGVyVmlldyxcclxuXHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiBzcGFjZUJldHdlZW4sXHJcblx0XHRcdFx0XHRcdHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdGluaXRpYWxTbGlkZTogaW5pdGlhbFNsaWRlLFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0b246IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZUNoYW5nZSA6ICgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRBcnJheS5mcm9tKGJpZywgKGl0ZW0saW5kZXgpID0+IHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtaGlkZScsIHN3aXBlLnN3aXBlci5yZWFsSW5kZXggIT09IGluZGV4KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGl0ZW0ucXVlcnlTZWxlY3RvcigndmlkZW8nKSl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcigndmlkZW8nKS5wYXVzZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA4XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IHNsaWRlc1BlclZpZXcsXHJcblx0XHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IHNwYWNlQmV0d2VlblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0UHViU3ViLnN1YnNjcmliZSgnd2luZG93V2lkdGhSZXNpemUnLCAoKSA9PiB7XHJcblxyXG5cdFx0XHRpZiAod2luZG93LlN3aXBlciAmJiB0b2dnbGVTd2lwZSkge1xyXG5cclxuXHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdFB1YlN1Yi5zdWJzY3JpYmUoJ3N3aXBlckpzTG9hZCcsICgpID0+IHtcclxuXHJcblx0XHRcdHN3aXBlLmFwcGVuZENoaWxkKHN3aXBlQ29udHJvbHMpO1xyXG5cclxuXHRcdFx0Ly8gZWFnZXJcclxuXHRcdFx0QXJyYXkuZnJvbShzd2lwZS5xdWVyeVNlbGVjdG9yQWxsKCdbbG9hZGluZz1cImxhenlcIl0nKSwgaW1nID0+IGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCdlYWdlcicpKTtcclxuXHJcblx0XHRcdC8vIGhpZGVcclxuXHRcdFx0QXJyYXkuZnJvbShpdGVtcywgZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlKCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuXHJcblx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBQdWJTdWIucHVibGlzaCgnc3dpcGVySnNMb2FkJyk7XHJcblxyXG5cdHNldFRpbWVvdXQoICgpID0+IGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KSwgQ29va2llcy5nZXQoJ2Zhc3RMb2FkU2NyaXB0JykgPyAwIDogMTAwMDApO1xyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1jb250YWluZXInKSk7Il19
