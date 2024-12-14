var ImageSlider = /** @class */ (function () {
    function ImageSlider() {
        this.slides = Array.from(document.querySelectorAll('.slide'));
        this.currentSlide = 0;
        this.showSlide(this.currentSlide); // Show the first slide
        this.startSlider();
    }
    ImageSlider.prototype.showSlide = function (n) {
        this.slides.forEach(function (slide, index) {
            slide.classList.remove('active');
            if (index === n) {
                slide.classList.add('active');
            }
        });
    };
    ImageSlider.prototype.nextSlide = function () {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    };
    ImageSlider.prototype.startSlider = function () {
        this.intervalId = setInterval(this.nextSlide.bind(this), 5000);
    };
    ImageSlider.prototype.stopSlider = function () {
        clearInterval(this.intervalId);
    };
    return ImageSlider;
}());
new ImageSlider();
