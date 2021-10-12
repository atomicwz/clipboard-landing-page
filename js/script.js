const itemScroll = document.querySelectorAll('.scroll-js')

const ajusteAltura = window.innerHeight * 0.8


function animaScroll(){
    itemScroll.forEach((itemScroll) => {
        const distanciaTop = itemScroll.getBoundingClientRect().top - ajusteAltura
        if(distanciaTop < 0){
            itemScroll.classList.add('ativo')
        }
    });
}
window.addEventListener('scroll', animaScroll)
