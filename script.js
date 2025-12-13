// script.js - Basit Navbar İşlemleri
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // CSS'de .active sınıfı olmalı
    });
}