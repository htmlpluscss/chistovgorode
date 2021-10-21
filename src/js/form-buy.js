( forms => {

	if(!forms.length) {

		return;

	}

	Array.from(forms, form => {

		const btn = form.querySelector('.form-buy__submit');

		form.addEventListener('submit', event => {

			event.preventDefault();
alert('положили в корзину')
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

			});

		});

	});

})(document.querySelectorAll('.form-buy'));