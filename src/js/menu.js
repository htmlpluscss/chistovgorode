// btn toggle

/*( btn => {

	if(btn) {

		let windowScroll = window.pageYOffset;

		btn.addEventListener('click', () => {

			if(document.body.classList.contains('menu-show')) {

				document.body.classList.remove('menu-show');
				window.scrollTo(0,windowScroll);

			} else {

				windowScroll = window.pageYOffset;

				document.body.classList.add('menu-show');
				window.scrollTo(0,0);

			}

		});

	}

})(document.querySelector('.btn-menu-toggle'));
*/

// menu catalog

( btn => {

	if(btn) {

		let windowScroll = window.pageYOffset;

		btn.addEventListener('click', () => {

			if(document.body.classList.contains('menu-catalog-show')) {

				document.body.classList.remove('menu-catalog-show');
				window.scrollTo(0,windowScroll);

			} else {

				windowScroll = window.pageYOffset;

				document.body.classList.add('menu-catalog-show');
				window.scrollTo(0,0);

			}

		});

	}

})(document.querySelector('.btn-toggle-menu-catalog'));

// menu service

( btns => {

	if(btns.length) {

		const body = document.querySelectorAll('.menu-catalog__body');

		Array.from(btns, btn => {

			btn.addEventListener('click', () => {

				Array.from(btns, (_btn, index) => {

					_btn.classList.toggle('is-current', _btn === btn);
					body[index].classList.toggle('hide', _btn !== btn);

				});

			});

		});

	}

})(document.querySelectorAll('.menu-catalog__nav-btn'));

// content-block

( blocks => {

	if(blocks.length) {

		Array.from(blocks, block => {

			const btn = block.querySelector('.content-block__toggle');

			btn.addEventListener('click', () => block.classList.toggle('is-open'));

		});

	}

})(document.querySelectorAll('.content-block'));