$(document).ready(function () {
	// Анимация для форм
	$('.form-control').blur(function() {
	var $this = $(this);
	if ($this.val())
		$this.addClass('used');
	else
		$this.removeClass('used');
	});
	// Плавный сдвиг к якорю
	$('#navbarMenu a[href^="#"]').click(function(){
	var el = $(this).attr('href');
	$('body').animate({
		scrollTop: $(el).offset().top}, 700);
		return false;
	});
	// Вставляем данные года в инпут для формы
	$('#personal .dropdown-menu .dropdown-item').click(function(){
		var Year = $(this).attr('href'); 
		$('#dropdownMenu').text(Year);
		$('#birthYear').val(Year);
		$('.dropdown-menu, .dropdown').removeClass('show');
		return false;
	});
	// Range Slider - ширина картинки в зависимости от скрола 
	$('#sliderRange').on('change mousemove touchmove', function(event) {
		var position = $(this).offset(); 
		$('.rangeslider_scale_fill').width(($(this).width() + event.pageX) - ($(this).width() + position.left));
	});
});
