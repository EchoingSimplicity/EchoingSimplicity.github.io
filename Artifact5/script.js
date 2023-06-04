var currentSlide = 0;
var slides = document.getElementsByClassName('slideshow-image');
var descriptions = document.getElementsByClassName('slideshow-description');
var nextButton = document.querySelector('.slideshow-next');
var prevButton = document.querySelector('.slideshow-prev');
var timer;

function showSlide(index) {
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        descriptions[i].style.display = 'none';
    }

    slides[index].classList.add('active');
    descriptions[index].style.display = 'block';
    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

nextButton.addEventListener('click', function () {
    clearInterval(timer);
    nextSlide();
    timer = setInterval(nextSlide, 3000);
});

prevButton.addEventListener('click', function () {
    clearInterval(timer);
    prevSlide();
    timer = setInterval(nextSlide, 3000);
});

timer = setInterval(nextSlide, 3000);
