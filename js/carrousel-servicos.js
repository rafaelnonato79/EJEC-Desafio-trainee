export default function carrouselServicos() {
    const itensCarrousel = document.querySelectorAll('.item-carrousel');
    const dots = document.querySelectorAll('.dot-servicos');

    if (itensCarrousel.length === 0 || dots.length === 0) return console.error('Não foi possível iniciar o carrossel');

    let indexItem = 0;

    function updateClasses() {
        itensCarrousel.forEach((item, i) => {
            item.classList.remove('item-principal', 'item-secundario');
            if (i === indexItem) {
                item.classList.add('item-principal');
            } else if (i === (indexItem + 1) % itensCarrousel.length) {
                item.classList.toggle('item-secundario');
                item.style.transform = 'translateX(180%)';
            } else if (i === (indexItem - 1 + itensCarrousel.length) % itensCarrousel.length) {
                item.classList.toggle('item-secundario');
                item.style.transform = 'translateX(-180%)';
            }
        });

        //event listeners
        const itemSecundario = document.querySelectorAll('.item-secundario');

        itemSecundario.forEach((item, i) => {
            item.addEventListener('click', () => {

                nextItem();
            });
        });
    }

    function showItem(index) {
        itensCarrousel.forEach((item, i) => {
            item.style.transition = 'transform 0.5s';
            if (i === index) {
                item.style.transform = 'translateX(0)';
            } else if (i === (index + 1) % itensCarrousel.length) {
                item.style.transform = 'translateX(10%) scale(1)';
            } else if (i === (index - 1 + itensCarrousel.length) % itensCarrousel.length) {
                item.style.transform = 'translateX(-10%) scale(1)';
            } else {
                item.style.transform = 'translateX(0) scale(0.8)';
            }
        });
        updateClasses();
        
    }

    

    function setActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextItem() {
        indexItem = (indexItem + 1) % itensCarrousel.length;
        showItem(indexItem);
        setActiveDot(indexItem);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            indexItem = i;
            showItem(indexItem);
            setActiveDot(indexItem);
        });
    });


    //TOUCH EVENTS

    const carrousel = document.querySelector('.carrousel-servicos');
    let startX;

    carrousel.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].clientX;
    });

    carrousel.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = endX - startX;

        if(deltaX > 0) {
            indexItem = (indexItem - 1 + itensCarrousel.length) % itensCarrousel.length;
            showItem(indexItem);
            setActiveDot(indexItem);
        } else if(deltaX < 0) {
            nextItem();
        }});

    setInterval(nextItem, 10000);
    showItem(indexItem); 
    setActiveDot(indexItem); 

}
