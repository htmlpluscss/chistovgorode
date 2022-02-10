<?php

if ( $_POST ) {

	$array = array(
		'id' => 123,
		'count' => 1,
		'name' => 'название товара',
		'description' => 'короткое описание, которое идет под h1 в карточке товара',
		'price' => '13 300 ₽',
		'priceOld' => '7 900 ₽',
		'link' => '/catalog/product/',
		'img' => '/img/cart/preview/Soteco_Panda_515-26_XP_Inox--126x126.jpg',
		'totalText' => 'В корзине 2 товара на сумму 23 600 ₽',
		'totalCart' => 2
	);

	$json = json_encode($array);

	echo $json;

} else {

	echo 'какая-то логика обработки формы без js с перезагрузкой страницы';

}