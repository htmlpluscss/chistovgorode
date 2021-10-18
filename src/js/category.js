// еще

( blocks => {

	if(blocks.length) {

		Array.from(blocks, block => {

			const btn = block.querySelector('.menu-category__toggle'),
				  wrap = block.querySelector('.menu-category__list-wrap'),
				  list = block.querySelector('.menu-category__list'),
				  itemHide = block.querySelectorAll('.menu-category__item.hide');

			if ( btn ) {

				btn.addEventListener('click', () => {

					wrap.style.height = wrap.clientHeight + 'px';

					Array.from(itemHide, item => item.classList.toggle('hide'));

					btn.classList.toggle('is-open');

					setTimeout( ()=> {

						wrap.style.height = list.clientHeight + 'px';

					}, 100);

				});

			}

		});

	}

})(document.querySelectorAll('.menu-category__section'));