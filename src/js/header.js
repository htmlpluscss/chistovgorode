( header => {

	if(header) {

		document.documentElement.style.setProperty('--heightHeader', header.clientHeight + 'px');

		const headerBottom = header.querySelector('.header__bottom'),
			  headerBottomInner = headerBottom.querySelector('.header__flex');

		const productScroll = document.querySelector('.product-scroll'),
			  productForm = document.querySelector('.product__form-buy');

		if ( productScroll ) {

			header.insertAdjacentElement('afterend', productScroll);

		}

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

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

			});

		});

	}

})(document.querySelector('.header'));