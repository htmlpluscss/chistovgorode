
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