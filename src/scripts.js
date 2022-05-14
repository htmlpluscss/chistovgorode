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

						okText.innerHTML = result.text;
						okText.classList.remove('hide');

						if(!window.isInViewport(okText)){

							okText.scrollIntoView({ behavior: 'smooth' });

						}

						if (result.url !== 'forgot') {

							function TSRedirectUser(){
								window.location.href = result.url;
							}

							window.setTimeout(TSRedirectUser(), 4000);
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