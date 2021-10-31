( () => {

	document.addEventListener('submit', event => {

		let form = event.target.closest('.form-buy');

		if (form) {

			event.preventDefault();

			const btn = form.querySelector('.form__submit');

			btn.disabled = true;

			form.classList.add('is-loading');

			fetch(form.getAttribute('action'), {
				method: 'POST',
				body: new FormData(form)
			})
//			.then(response => response.json())
			.then(result => {

				console.log(result);

				form.classList.remove('is-loading');
				btn.disabled = false;

			});

		}

	});

})();