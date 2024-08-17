const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let msg = document.querySelector(".msg")
let reset = document.querySelector('.reset')
let scores = document.querySelector('.score')
const boards = document.querySelector('.board')

const sound = new Audio("smashs.mp3")
const sound1 = new Audio("explo.mp3")
const sound2 = new Audio("over.mp3")
let score = 0
run()
function bom(){
    
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src ='bomb.png'

    img.addEventListener('click', () =>{
        sound1.play()

        img.src = 'blasts.png'
        clearTimeout(timer)
        setTimeout(()=>{
            hole.removeChild(img)
            bom()
            boards.classList.remove('board')
            msg.innerText=`GAME OVER !`;
            scores.innerText=`YOUR SCORE : ${score}`;
            reset.innerHTML='<a href="/newgame.html">PLAY AGAIN</a>'
            sound2.play()
            


            },1000)
        
        
    })

    hole.appendChild(img)

    timer = setTimeout(()=>{
    hole.removeChild(img)
    bom()
    },1500)
}
bom()


function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src ='mole.png'

    img.addEventListener('click', () =>{
        sound.play()
        score +=10
        scoreEl.textContent = score
        img.src = 'molew.png'
        clearTimeout(timer)
        setTimeout(()=>{
            hole.removeChild(img)
            run()
            },500)
        
    })

    hole.appendChild(img)

    timer = setTimeout(()=>{
    hole.removeChild(img)
    run()
    },1500)
}







window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY +'px'
    cursor.style.left = e.pageX +'px'
})
window.addEventListener('mousedown', () =>{
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () =>{
    cursor.classList.remove('active')
})