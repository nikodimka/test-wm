$(document).ready(function () {
	initMobileTouch();
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
	$('#sliderRange').on('change mousemove touchstart', function(event) {
		var position = $(this).offset(); 
		$('.rangeslider_scale_fill').width(($(this).width() + event.pageX) - ($(this).width() + position.left));
	});
});

function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";

    switch(event.type)
    {
       //case "touchstart": type = "mousedown"; break;
       case "touchmove":  type = "mousemove"; break;        
       //case "touchend":   type = "mouseup"; break;
       default: return;
    }

    //initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //           screenX, screenY, clientX, clientY, ctrlKey, 
    //           altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                          first.screenX, first.screenY, 
                          first.clientX, first.clientY, false, 
                          false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function initMobileTouch() 
{
    //document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    //document.addEventListener("touchend", touchHandler, true);
    //document.addEventListener("touchcancel", touchHandler, true);    
}
