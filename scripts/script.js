function mostrarMenu() {
    $('nav#nav-esq ul.menu-principal').css('display', 'flex');
    $('nav#nav-esq ul.menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('nav#nav-esq ul#icone-menu li#menu').css('display', 'none');
    $('nav#nav-esq ul#icone-menu li#menuX').css('display', 'flex');
    
}

function esconderMenu() {
    $('nav#nav-esq ul.menu-principal').css('display', 'none');


    $('nav#nav-esq ul#icone-menu li#menu').css('display', 'flex');
    $('nav#nav-esq ul#icone-menu li#menuX').css('display', 'none');
}

let controle = true;

$('nav#nav-esq ul#icone-menu').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})