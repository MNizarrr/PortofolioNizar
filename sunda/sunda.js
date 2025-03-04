// script.js
document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.paragraph');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Saat elemen muncul (scroll ke bawah)
                entry.target.classList.add('visible');
                entry.target.classList.remove('hide');
            } else {
                // Saat elemen menghilang (scroll ke atas)
                entry.target.classList.add('hide');
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Sesuaikan threshold sesuai kebutuhan
    });

    paragraphs.forEach(paragraph => {
        observer.observe(paragraph);
    });
});