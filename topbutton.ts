const button = document.getElementById('scrollToTopBtn') as HTMLButtonElement;

// Nút chạy lên đầu trang
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Ẩn hiện nút
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

// 
button.addEventListener('click', scrollToTop);