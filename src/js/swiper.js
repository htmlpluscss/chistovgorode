( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeControls = document.createElement('div'),
			  swipeNav = document.createElement('div'),
			  swipeBtns = document.createElement('div'),
			  swipeNext = document.createElement('button'),
			  swipePrev = document.createElement('button'),
			  scrollbar = swipe.parentNode.querySelector('.swiper-scrollbar'),
			  items = swipe.querySelectorAll('.swiper-slide'),
			  count = items.length,
			  cardAuto = swipe.classList.contains('swiper-container--card-auto'),
			  billboard = swipe.classList.contains('swiper-container--billboard');

		swipeNav.className = 'swiper-pagination';
		swipeControls.className = 'swiper-controls';

		swipeBtns.className = 'swiper-navigation';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.setAttribute('aria-label','Previous slide');
		swipeNext.setAttribute('aria-label','Next slide');

		swipePrev.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.41 11.5H18a1 1 0 0 1 0 2H8.41l3.8 3.8a1 1 0 0 1-1.42 1.4l-5.5-5.5a1 1 0 0 1 0-1.4l5.5-5.5a1 1 0 0 1 1.42 1.4l-3.8 3.8Z"/></svg>';
		swipeNext.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.8 5.8a1 1 0 0 0 0 1.4l3.79 3.8H6a1 1 0 0 0 0 2h9.59l-3.8 3.8a1 1 0 1 0 1.42 1.4l5.5-5.5a1 1 0 0 0 .29-.67v-.06a1 1 0 0 0-.3-.68l-5.5-5.5a1 1 0 0 0-1.4 0Z"/></svg>';

		swipeBtns.appendChild(swipePrev);
		swipeBtns.appendChild(swipeNext);
		swipeControls.appendChild(swipeBtns);
		swipeControls.appendChild(swipeNav);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeBtns.classList.add('hide');
			swipeControls.classList.add('hide');

			swipe.parentNode.classList.remove('swiper-container-style');

		}

		if (billboard) {

			resetSwipe();

			swipeControls.classList.add('center');
			swipeNav.classList.remove('hide');
			swipeControls.classList.remove('hide');

			toggleSwipe = () => {

				toggleSwipe = false;
				swipe.parentNode.classList.add('swiper-container-style');

				new Swiper(swipe, {
					loop: true,
					autoplay: {
						delay: 5000
					},
					pagination: {
						el: swipeNav,
						clickable: true,
						bulletClass: 'button',
						bulletActiveClass: 'is-active'
					}
				});

			}

		}

		if (cardAuto) {

			toggleSwipe = () => {

				resetSwipe();

				toggleSwipe = false;

//				swipe.parentNode.appendChild(swipeControls);

				swipePrev.classList.add('swiper-button-disabled');

				swipe.parentNode.classList.add('swiper-container-style');
				swipeBtns.classList.remove('hide');
				swipeControls.classList.remove('hide');

				new Swiper(swipe, {

	//				loop: true,
					slidesPerView: "auto",
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					}

				});

			}

		}

		PubSub.subscribe('windowWidthResize', () => {

			if (window.Swiper && toggleSwipe) {

				toggleSwipe();

			}

		});

		PubSub.subscribe('swiperJsLoad', () => {

			swipe.appendChild(swipeControls);

			// eager
			Array.from(swipe.querySelectorAll('[loading="lazy"]'), img => img.setAttribute('loading','eager'));

			// hide
			Array.from(items, el => el.classList.remove('hide'));

			toggleSwipe();

		});

	});

	const script = document.createElement('script');

	script.src = '/js/swiper.min.js';

	script.onload = () => PubSub.publish('swiperJsLoad');

	setTimeout( () => document.head.appendChild(script), Cookies.get('fastLoadScript') ? 0 : 10000);

})(document.querySelectorAll('.swiper-container'));