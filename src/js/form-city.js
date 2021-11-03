( formCity => {

	if ( !formCity ) {

		return;

	}

	formCity.addEventListener('change', () => {

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

	});

	formCity.addEventListener('submit', event => {

		event.preventDefault();

/*

также учитываем ввод текста, если жмет ентер и совпадение !== 1
то лож, иначе отправка
*/

	});

	formCity.addEventListener('keyup', event => {

		console.log(event.key);

		// фильтруем
/*

и надо показать при вводе что нет городов, если набрал белиберду*/
	});

})(document.querySelector('.form-city'));