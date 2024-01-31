let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    gameTime = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;
    
    let colors = ['red','yellow', 'green','purple']

    btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }

    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})




function start() {
    interval =  setInterval(() => decrease(),1000)
    createBall()
    
}

function decrease() {
    if(time == 0) {
        end()
    }else {
        let currentTime = --time
        gameTime.innerHTML = currentTime
    }
}

function end() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`    
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = randomSize();
    let cor = gameBox.getBoundingClientRect()
    let { width, height } = cor
    
    ball.style.width = ball.style.height = size + 'px'
    let x = random(0, width - size)
    let y = random(0, height - size)
    
  
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    ball.style.background = randomColor
    
    
    gameBox.append(ball)
   
}


function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}


function randomSize() {
return Math.floor(Math.random() * (100 - 20) + 20)
}
 randomSize(20,100)
 
 
 function randomInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min));
}
  let randomColor = colors[randomInteger(0, colors.length - 1)]
