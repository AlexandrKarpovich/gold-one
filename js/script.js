$(document).ready(function () {
  // фиксированная шапка
  // $(".up-line-header").removeClass("default");
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 20){
  //     $(".up-line-header").addClass("default").fadeIn('fast');
  //   } else {
  //     $(".up-line-header").removeClass("default").fadeIn('fast');
  //   };
  // });
  // плавный скролл
	$(".nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
