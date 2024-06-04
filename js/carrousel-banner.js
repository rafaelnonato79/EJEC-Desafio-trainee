export default function carrouselBanner() {
   

    const images = document.querySelectorAll('.carrousel-banner img')
    const dots = document.querySelectorAll('.dot')

    if(images.length === 0 || dots.length === 0) return console.error('Não foi possível iniciar o carrossel');

    let indexImage = 0;

    function showImage(index){
        images.forEach((img, i) =>{
            img.style.transition = `transform 0.5s ${i - index === 0 ? 'ease' : 'ease-in-out'}`
            img.style.transform = `translateX(-${index * 100}%)`
        })
    }


    function setActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        })
    }

    function nextImage() {
        indexImage = (indexImage + 1) % images.length;
        showImage(indexImage);
        setActiveDot(indexImage);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            indexImage = i;
            showImage(indexImage);
            setActiveDot(indexImage);
        })
    });

    setInterval(nextImage, 3000); 
    showImage(indexImage); 
    setActiveDot(indexImage); 
}

