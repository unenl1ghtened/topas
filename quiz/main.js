(function($) {
	jQuery(document).ready(function() {
		$('.step-slide__title').each(function(index, el) {
			$(el).prepend('<div class="step-slide__title-counter">' + (index + 1) + '</div>');
		});
		for (var i = 1; i < $('.step-slide').length - 1; i++) {
			$('.step__extender').append('<div class="step__extender-item"></div>');
		};
		var progress = {
			current: (110 / ($('.step-slide').length - 1)),
			total: $('.step-slide').length,
			width: (110 / ($('.step-slide').length - 1)),
			process: doProgress
		};

		function doProgress() {}
		var testSlider = $('.test-slider').bxSlider({
			mode: 'fade',
			infiniteLoop: false,
			speed: 0,
			adaptiveHeight: true,
			adaptiveHeightSpeed: 0,
			touchEnabled: false,
			pager: false,
			prevSelector: '.btn-prev-container',
			prevText: '<div class="btn-prev"><span>Назад</span></div>',
			nextSelector: '.btn-next-container',
			nextText: '<div class="btn-next"><span>на следующий шаг</span></div>',
			onSliderLoad: function(currentIndex) {
				$('.main-progress__text').eq(currentIndex).addClass('main-progress__text_active');
				$('.step__extender-item').eq(currentIndex).addClass('step__extender-item_active');
				$('.main-progress__extender').css('width', progress.width + '%');
				var step_height = $('.step-slide:nth-child(6)').height();
				$('.bx-viewport').height(step_height);
			},
			onSlideAfter: function(slideElement, oldIndex, newIndex) {
				$('.btn-next-container').removeClass('btn-next-container_active');
				$('.btn-next').removeClass('btn-next_active btn-shine');
				var step_height = $('.step-slide:nth-child(6)').height();
				$('.bx-viewport').height(step_height);
				if ($('.main-progress__text').eq(newIndex).length != 0) {
					$('.main-progress__text').eq(oldIndex).removeClass('main-progress__text_active');
					$('.main-progress__text').eq(newIndex).addClass('main-progress__text_active');
				};
				var toTopDoc = window.parent.document.querySelector('.fancybox-slide--iframe');
				$(toTopDoc).animate({
					scrollTop: 0
				}, 0);
			}
		});
		$('.pick-item__input').on('change', function(event) {
			var num_step = $('step__text').find('span').html();
			event.preventDefault();
			$('.btn-next-container').addClass('btn-next-container_active');
			$('.btn-next').addClass('btn-next_active btn-shine');
			$(this).parent().parent().parent().find('.btn-next').click();
		});
		$('.btn-prev-container').click(function() {
			let numStep = +$('.step__text span').html() - 1;
			progress.current -= progress.width;
			$('.main-progress__extender').css('width', progress.current + '%');
			$('.step__extender-item').eq(numStep).removeClass('step__extender-item_active');
			$('.step__text span').html(numStep);
		});
		$('.btn-next-container').click(function() {
			let numStep = +$('.step__text span').html();
			progress.current += progress.width;
			$('.main-progress__extender').css('width', progress.current + '%');
			$('.step__extender-item').eq(numStep).addClass('step__extender-item_active');
			$('.step__text span').html(numStep + 1);
		});
		var send_form = false;
		$('.portable-test-wrapper').each(function(index, el) {
			$(el).validate({
				rules: {
					"phone": {
						required: true
					}
				},
				
			});
		});
		$('input[name="phone"]').keydown(function(e) {
			var str = $(this).val().replace(/[^0-9]/gim, '');
			if (e.key == 8 && str.length < 2) {
				return false;
			}
		});
		
		$('.pick-item').click(function() {
			setTimeout(function(){
				$('#test').animate({
		        scrollTop: $(".title__txt").offset().top
		   		 }, 2000);
			}, 200);
			
		});

	});
})(jQuery);