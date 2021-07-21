let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.btnNext').addEventListener('click', function(){
    offset = offset + 720;
    if (offset > 2160) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.btnPrev').addEventListener('click', function () {
    offset = offset - 720;
    if (offset < 0) {
        offset = 2160;
    }
    sliderLine.style.left = -offset + 'px';
});