const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentImage = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImage = index;
        showImage();
        lightbox.style.display = 'flex';
    });
});

function showImage(){
    lightboxImg.src = images[currentImage].src;
}

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    showImage();
});

prevBtn.addEventListener('click', () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
});

function filterSelection(category){

    const images = document.querySelectorAll('.filter');

    images.forEach((img)=>{

        if(category === 'all'){
            img.style.display = 'block';
        }

        else if(img.classList.contains(category)){
            img.style.display = 'block';
        }

        else{
            img.style.display = 'none';
        }

    });

}