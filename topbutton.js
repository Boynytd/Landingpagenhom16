var button = document.getElementById('scrollToTopBtn');
// Nút chạy lên đầu trang
var scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// Ẩn hiện nút
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    }
    else {
        button.style.display = 'none';
    }
});
// 
button.addEventListener('click', scrollToTop);
