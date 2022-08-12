/************** JQUERY NOS BOTÕES **************/

$(document).ready(function(){

    $(".card-buy").click(function(){
        alert('Ops, este produto já acabou :(');

        $(this).text('Indisponível');
    })

    $('.botao-banner').click(function(){
        alert('Ops, este produto já acabou :(');

        $(this).text('Indisponível');
    })
})

/************** MENU **************/

function mostrarMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active') 
}


/************** ZOOM IMAGEM BANNER **************/

// const banner = document.getElementById('imagem-banner');
// const imgBanner = document.getElementById('img-banner');

// banner.addEventListener('mousemove', (e) =>{
//     const x = e.clientX - e.target.offsetLeft;
//     const y = e.clientY - e.target.offsetTop;

//     console.log(x,y);

//     imgBanner.style.transformOrigin = `${x}px ${y}px`;
//     imgBanner.style.transform = 'scale(2)';
// });

// banner.addEventListener('mouseleave', () =>{
//     imgBanner.style.transformOrigin = 'center center';
//     imgBanner.style.transform = 'scale(1)';
// });

