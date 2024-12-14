class ImageSlider {
    private slides: HTMLElement[];
    private currentSlide: number;
    private intervalId: number | undefined;

    constructor() {
        this.slides = Array.from(document.querySelectorAll('.slide'));
        this.currentSlide = 0;
        this.showSlide(this.currentSlide); // Slide Đầu
        this.startSlider();
    }

    private showSlide(n: number): void {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === n) {
                slide.classList.add('active');
            }
        });
    }

    private nextSlide(): void {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
    }

    private startSlider(): void {
        this.intervalId = setInterval(this.nextSlide.bind(this), 5000);
    }

    public stopSlider(): void {
        clearInterval(this.intervalId);
    }
}

new ImageSlider();