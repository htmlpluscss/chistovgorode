
( form => {

	if(form) {

		const fieldsets = form.querySelectorAll('.filter__fieldset');

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

			const formData = new FormData(form);

			const queryString = new URLSearchParams(formData).toString();

			history.pushState(undefined, '', '?' + queryString);

//			searchResult.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: formData
			})
			.then(response => response.text())
			.then(html => {

//				searchResult.classList.remove('is-loading');

			});

		});

		// submit

		form.addEventListener('submit', event => {

			event.preventDefault();

			form.dispatchEvent(new CustomEvent("change"));

		});

	}

})(document.querySelector('.filter'));



// filter-sort-trigger

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

						filter.elements.sort.value = btn.getAttribute('data-value');

					}

					filter.dispatchEvent(new CustomEvent("change"));

				});

			});

		})

	}

})(document.querySelectorAll('.filter-sort-trigger'));