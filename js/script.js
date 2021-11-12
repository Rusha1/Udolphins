$( document ).ready(function(){
	  $( ".menu__item" ).hover(function(){ // задаем функцию при наведении курсора на элемент
	    $( ".menu__item" ).not($(this)).css( "color", "#9B9B9B" ); // задаем цвет заднего фона
	    }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента
	    $( ".menu__item" ).css( "color", "#ffffff" ); // задаем цвет заднего фона
	  });
	});

function l_image (a) {
    document.example_img.src=a
}

$(function() {
    $('.link-services').click(function(){
        $('.title-services').html($(this).html());
    })
});

$(function() {
    $('.link-CM').click(function(){
        $('.text-one').text("We support participants of the project and potential investors in technical, economic and additional project information.Our community managers have deep knowledge in ICO details and fluent english.").html();
    })
});

$(function() {
    $('.link-PR').click(function(){
        $('.text-one').text("High level operators. They will quickly answer customer questions. The client will be pleasantly surprised by the speed of responses. Operators are thoroughly studying the project.").html();
    })
});

$(function() {
    $('.link-СA').click(function(){
        $('.text-one').text("Our moderators monitor your resource on an ongoing basis. They will not lose sight of anyone. Your resources will be safe from spam and unwanted information.").html();
    })
});

$(function() {
    $('.link-CM').click(function(){
        $('.button-services').text("Order - 600$ per month").html();
    })
});

$(function() {
    $('.link-PR').click(function(){
        $('.button-services').text("Order - 450$ per month").html();
    })
});

$(function() {
    $('.link-СA').click(function(){
        $('.button-services').text("Order - 300$ per month").html();
    })
});

$(function() {
    $('.link-CM').click(function(){
        $('.text-two').text("Ordering a manager is very simple: send project information and we will begin within 3 days.").html();
    })
});

$(function() {
    $('.link-PR').click(function(){
        $('.text-two').text("Now it is important to have an instant response. Ordering such a response is easy!").html();
    })
});

$(function() {
    $('.link-СA').click(function(){
        $('.text-two').text("We have experience from above 4 years in cryptocurrency. Served more than 20 projects.").html();
    })
});

$(function() {
    $('.link-CM').click(function(){
        $('.link-CM').css('color', '#ffffff').html();
        $('.link-PR').css('color', '#2ed3ac').html();
        $('.link-СA').css('color', '#2ed3ac').html();
        $('.link-CM').css('border', '1px double white').css('border-radius', '50px');
        $('.link-PR').css('border', '0px').html();
        $('.link-СA').css('border', '0px').html();
    })
});

$(function() {
    $('.link-PR').click(function(){
        $('.link-CM').css('color', '#2ed3ac').html();
        $('.link-PR').css('color', '#ffffff').html();
        $('.link-СA').css('color', '#2ed3ac').html();
        $('.link-PR').css('border', '1px double white').css('border-radius', '50px');
        $('.link-CM').css('border', '0px').html();
        $('.link-СA').css('border', '0px').html();
    })
});

$(function() {
    $('.link-СA').click(function(){
        $('.link-CM').css('color', '#2ed3ac').html();
        $('.link-PR').css('color', '#2ed3ac').html();
        $('.link-СA').css('color', '#ffffff').html();
        $('.link-СA').css('border', '1px double white').css('border-radius', '50px');
        $('.link-PR').css('border', '0px').html();
        $('.link-CM').css('border', '0px').html();
    })
});

   'use strict';
   var multiItemSlider = (function () {
     return function (selector, config) {
       var
         _mainElement = document.querySelector(selector), // основный элемент блока
         _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
         _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
         _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
         _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
         _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
         _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
         _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
         _positionLeftItem = 0, // позиция левого активного элемента
         _transform = 0, // значение транфсофрмации .slider_wrapper
         _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
         _items = []; // массив элементов
       // наполнение массива _items
       _sliderItems.forEach(function (item, index) {
         _items.push({ item: item, position: index, transform: 0 });
       });

       var position = {
         getMin: 0,
         getMax: _items.length - 1,
       }

       var _transformItem = function (direction) {
         if (direction === 'right') {
           if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
             return;
           }
           if (!_sliderControlLeft.classList.contains('slider__control_show')) {
             _sliderControlLeft.classList.add('slider__control_show');
           }
           if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
             _sliderControlRight.classList.remove('slider__control_show');
           }
           _positionLeftItem++;
           _transform -= _step;
         }
         if (direction === 'left') {
           if (_positionLeftItem <= position.getMin) {
             return;
           }
           if (!_sliderControlRight.classList.contains('slider__control_show')) {
             _sliderControlRight.classList.add('slider__control_show');
           }
           if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
             _sliderControlLeft.classList.remove('slider__control_show');
           }
           _positionLeftItem--;
           _transform += _step;
         }
         _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
       }

       // обработчик события click для кнопок "назад" и "вперед"
       var _controlClick = function (e) {
         var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
         e.preventDefault();
         _transformItem(direction);
       };

       var _setUpListeners = function () {
         // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
         _sliderControls.forEach(function (item) {
           item.addEventListener('click', _controlClick);
         });
       }

       // инициализация
       _setUpListeners();

       return {
         right: function () { // метод right
           _transformItem('right');
         },
         left: function () { // метод left
           _transformItem('left');
         }
       }

     }
   }());

   var slider = multiItemSlider('.sliderBar')
