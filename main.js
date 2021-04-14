//Slider
const images = document.querySelectorAll('.slider .slider__content .slider__img');
const sliderLine = document.querySelector('.slider .slider__content');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider__prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}



//медленный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
anchor.addEventListener("click", function(e) {
e.preventDefault() // Предотвратить стандартное поведение ссылок
// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'

// Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
    behavior: "smooth",
    block: "start"
    })
})
}


// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.nav__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__body').click(function(){
    $('.nav__icon, .nav__body').removeClass('active');
    $('body').removeClass('lock');
});




//Плавающая шапка
window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 190);
});