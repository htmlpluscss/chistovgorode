( form => {

	if( form ) {

		const total = document.querySelector('.cart__result-sticke');

		form.addEventListener('change', event => {

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
			.then(response => response.text())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');

				total.innerHTML = result;

				const counter = form.querySelectorAll('.cart__item');

				if ( counter.length === 0 ) {

					document.querySelector('.cart__title').removeAttribute('data-counter');
					document.querySelector('.header__account-link').removeAttribute('data-counter');

				} else {

					document.querySelector('.cart__title').setAttribute('data-counter', counter.length);
					document.querySelector('.header__account-link').setAttribute('data-counter', counter.length);

				}

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