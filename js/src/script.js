$(window).on('load', function() {
    //El Dom está listo para el uso
    const Burger = document.querySelector('.Burger-Menu')
    const OpenNavMovile = document.querySelector('.MobileNav')
    onClickBurgerAnimation = () =>{
        
        Burger.children[0].classList.toggle('BarraOneBurger')
        Burger.children[1].classList.toggle('BarraTwoBurger')
        Burger.children[2].classList.toggle('BarraThreeBurger')
        OpenNavMovile.classList.toggle('active')
    }

    //Animation sub menu Movile
    const arroySubMenu = document.querySelector('.arrowSubMnu')
    OpenSubMenu = (event) => {
        
        if(event.target.parentNode.nextElementSibling.classList.contains('subnav-content-Mobile')){
            $(event.target.parentNode.nextElementSibling).toggle(400)
           event.target.children[0].classList.toggle('active')
            
        }
        
    }


});


$(document).ready(function() {
    //El Dom se cargó correctamente.

});


//BurgerAnimation

