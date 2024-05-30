export default function accordion(){
    const perguntas = document.querySelectorAll('[data-anime="accordion"] .pergunta');
    console.log(perguntas);
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        perguntas[0].classList.add(activeClass);

        function activeAccordion(){

            // Verifica se o item clicado já está ativo
            const isActive = this.classList.contains(activeClass);
            
            // Remove a classe 'ativo' de todos os itens
            accordionList.forEach(item => {
                item.classList.remove(activeClass);
                item.nextElementSibling.classList.remove(activeClass);
            });

            // Se o item clicado não estava ativo, ativa-o
            if (!isActive) {
                this.classList.add(activeClass);
                this.nextElementSibling.classList.add(activeClass);
            }
        }

        function activePergunta(){

            const isActive = this.classList.contains(activeClass);

            perguntas.forEach((pergunta) => {
                pergunta.classList.remove(activeClass);
            });

            if(!isActive)this.classList.toggle(activeClass);

        }
        

        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion);
        });
        perguntas.forEach((pergunta) =>{
            pergunta.addEventListener('click', activePergunta);
        })
    }
}