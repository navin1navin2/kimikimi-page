let intro = document.querySelector('.intro');
let loading = document.querySelector('.loading-header');
let gif = document.querySelector('.cat');
let loadingSpan = document.querySelectorAll('.loading');
let gifSpan = document.querySelectorAll('.gif');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadingSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        }); 
    }, 100); 

    setTimeout(() => {
        gifSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        }); 
    }, 100); 

    setTimeout(() => {
       loadingSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
       gifSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300);

}); 
