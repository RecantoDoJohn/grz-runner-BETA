const gazy = document.querySelector('.grzrun');
const cactu = document.querySelector('.cactus');
const placar = document.querySelector('.pontua')
const chico = document.querySelector('.coin');
const moedaponto = document.querySelector('.moedapont');
const jumpaudio = new Audio('./sns/Jump.wav')
const faudio = new Audio('./sns/F.wav')
const coinaudio = new Audio('./sns/coin.wav')


var ponto = 0
var moedadisp = 0 
var acabou = false

//cactu.classList.add('cactusvem');


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
    jumpaudio.play() 
    }
}

// loop do jogo animation: cactusanima 2s infinite linear;   
const game = setInterval(() => {
    
    const posicaocactu = cactu.offsetLeft;
    const posicaocoin = chico.offsetLeft;
    const posicaogzy = +window.getComputedStyle(gazy).bottom.replace('px', '');
    const animaciongrz = window.getComputedStyle(gazy)


    ponto++
    placar.innerHTML = `${ponto} Pontos`

    

    // console.log(posicaocactu)

    if (posicaogzy == -120 && animaciongrz.animationName !== 'none') {
        gazy.src  = './spr/grzrun.gif'
        gazy.classList.remove('jump');   

    }
    
    // verificar caso coleta de moeda
    if (posicaocoin <= 280 && posicaocoin > 180 && posicaogzy >  -20) {
        coinaudio.play()
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
        faudio.play()
        acabou = true
        clearInterval(jump)
        clearInterval(game)
        clearInterval(moeda)
        gazy.src = './spr/grzanjo.gif'
        gazy.classList.add('anjo');
    }

    // caso o cactu tiver animaçao
    if (cactu.classList.contains('cactusvem')) {    
            // verificar se cacto saiu da tela 
            if (posicaocactu <= -150) {
                cactu.classList.remove('cactusvem');

            }
        } else { // trocar o sprt e adicionar animaçao dnv
            var sortec = Math.floor(Math.random() * 20) 
            console.log(sortec, "soret")
            if (sortec >= 0 && sortec <= 5) {
                cactu.src = './spr/cactu1.png'
                cactu.classList.add('cactusvem');

            } else if (sortec > 5 && sortec <= 10) {
                cactu.src = './spr/cactu2.png'
                cactu.classList.add('cactusvem');
            } else if (sortec > 10 && sortec <= 15) {
                cactu.src = './spr/cactulf.png'
                cactu.classList.add('cactusvem');

            } else if (sortec > 15 && sortec <= 20) {
                cactu.src = './spr/cactuspy.png'
                cactu.classList.add('cactusvem');

            }
            
        }


     }, 10)



    

if (acabou == true) {
    location.reload()
}
    document.addEventListener('keydown', jump);
    document.addEventListener('touchstart', jump)


