( header => {

	if(header) {

		document.documentElement.style.setProperty('--heightHeader', header.clientHeight + 'px');

		const headerBottom = header.querySelector('.header__bottom'),
			  headerBottomInner = headerBottom.querySelector('.header__flex');

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

			});

		});

	}

})(document.querySelector('.header'));