$(function(){
    //Плавный скролл
    $("[data-scroll]").on("click", function(event){
        event.preventDefault(); //Отключаем стандартные свойства объекта у которога сработал ивент "click", в данном случае ссылки
        
        let elementId = $(this).data('scroll'); //Находим элемент на который ссылается атрибут data-scroll у ссылки по которой кликнули (см. index.html 22-ая строка)
        let elementOffset = $(elementId).offset().top; //высчитываем насколько этот элемент внизу от верха экрана

        

        $("html, body").animate({ //Вызываем анимацию для скрола вниз
            scrollTop: elementOffset - 70
        }, 700); //Время анимации 700мс
        console.log(elementId);
    });

    let navToggle = $(".burger"); //помещаем в переменную объект бургер, появляется в хедере при планшетном разрешении
    let nav = $("#nav"); //блок навигации

    
    /*Выпадающее меню*/
    navToggle.click(function() {  //при клике на бургер вызываем функцию
        nav.toggleClass("show");  //либо прикрепляем либо открепляем от блока навигации класс "show"
        if (nav.hasClass("show")){ //Если класс "show" есть
            nav.animate({  //Анимируем изменение координаты right на значение 0
                right: 0
            }, 500); //Время анимации
        }
        else{ //Если класс "show" отсутсвует
            nav.animate({
                right: -400 //Анимируем изменение координаты right на значение -400 (за правый край экрана)
            }, 500); //Время анимации
        } 
      });

      /* Слайдер*/
      /* Документация: https://kenwheeler.github.io/slick/ */
      let slider = $("#slider");

      slider.slick({
        dots: true, //Точки(цифры) для преключения (true - вкл, false - выкл)
        arrows: true, //Стрелки для переключения
        infinite: true, //Бесконеное мотание
        speed: 500, //Скорость анимации
        fade: true, //Плавное затухание
        cssEase: 'linear', //Плавная анимация
        autoplay: true, //Автоматическое переключение слайдов
        autoplaySpeed: 5000 //Скорость автоматической анимации
      });
});

