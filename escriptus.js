const gazy = document.querySelector('.grzrun');
const cactu = document.querySelector('.cactus');
const placar = document.querySelector('.pontua')
const chico = document.querySelector('.coin');
const moedaponto = document.querySelector('.moedapont');

var ponto = 0
var moedadisp = 0 
var acabou = false



const moeda = setInterval(() => {
    
    var sorte = Math.floor(Math.random() * 20)
    //console.log(sorte)
    
    if (sorte > 10) {
        chico.classList.add('vem')
    }

    /*if (sorte > 0 && sorte <= 5) {
        cactu.scr = './spr/cactu1.png'
        cactu.animation
    }*/

    
}, 2000)
const jump = () => {
    if (acabou == true) {
        location.reload()
    } else {

    gazy.classList.add('jump');
    gazy.src = './spr/grzjump.png'
    }
}

// loop do jogo
const game = setInterval(() => {
    
    const posicaocactu = cactu.offsetLeft;
    const posicaocoin = chico.offsetLeft;
    const posicaogzy = +window.getComputedStyle(gazy).bottom.replace('px', '');
    const animaciongrz = window.getComputedStyle(gazy)
    const animaciocac = document.querySelector('.cactusvem');


    ponto++
    placar.innerHTML = `${ponto} Pontos`

    console.log(posicaocactu)

    if (posicaogzy == -120 && animaciongrz.animationName !== 'none') {
        gazy.src  = './spr/grzrun.gif'
        gazy.classList.remove('jump');   

    }
    
    // verificar caso coleta de moeda
    if (posicaocoin <= 280 && posicaocoin > 180 && posicaogzy >  -20) {
        moedadisp++
        moedaponto.innerHTML = `${moedadisp} moedas`
        chico.classList.remove('vem');
    } 
    else if (posicaocoin < -50) {
        chico.classList.remove('vem');
    }
    

    // verificar caso morte
    if (posicaocactu <= 240 && posicaocactu > 90 && posicaogzy < 10) {
        cactu.style.animation = 'none'
        cactu.style.left = `${posicaocactu}px`
        acabou = true
        clearInterval(jump)
        clearInterval(game)
        clearInterval(moeda)
        gazy.src = './spr/grzanjo.gif'
        gazy.classList.add('anjo');
    }

        // verificar se cacto saiu da tela BETA
       /* if (posicaocactu < -10) {
            var sortec = Math.floor(Math.random() * 20)
            animaciocac.style.animationDuration = '3s'
            cactu.classList.remove('cactusvem');
            console.log(sortec, "soret")
    
            if (sortec >= 0 && sortec <= 5) {
                cactu.scr = './spr/cactu2.png'
                animaciocac.style.animationDuration = '3s'
                cactu.classList.add('cactusvem');
            } else if (sortec > 5 && sortec <= 10) {
                cactu.scr = './spr/cactu2.png'
                animaciocac.style.animationDuration = '1s'
                cactu.classList.add('cactusvem');
            } else if (sortec > 10 && sortec <= 15) {
                cactu.scr = './spr/cactu2.png'
                animaciocac.style.animationDuration = '2s'
                cactu.classList.add('cactusvem');
            } else if (sortec > 15 && sortec <= 20) {
                cactu.scr = './spr/cactu2.png'
                animaciocac.style.animationDuration = '1.5s'
                cactu.classList.add('cactusvem');
            }
        } */

     }, 10)



    

if (acabou == true) {
    location.reload()
}
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump)


