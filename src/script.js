// nav scroll
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-menu')
const header = document.querySelector('header')
const drop = document.querySelector('header nav a:last-child span')
 
const aboutArticleOne = document.querySelector('#about main article:nth-child(1)')
const aboutArticleTwo = document.querySelector('#about main article:nth-child(2)')
const aboutHead = document.querySelector('#about h1')

let lastPostion = 0
window.addEventListener('scroll', ()=>{
    let currentPosition = window.scrollY
    if (currentPosition > lastPostion) {
        header.classList.add('-translate-y-full')
        drop.classList.remove('translate-y-16')
    } else {
        header.classList.remove('-translate-y-full')
        drop.classList.add('translate-y-16')
    }
    lastPostion = currentPosition
})

window.addEventListener('mousemove', (element)=>{
    if (element.clientY <= 45) {
        header.classList.remove('-translate-y-full')
        drop.classList.add('translate-y-16')
    }
})

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                document.querySelector('.nav-menu[href*=' + id + ']').classList.add('active')
            })
            // aniamtion about
            aboutHead.classList.add('animate-to-down')
            aboutArticleOne.classList.add('animate-to-right')
            aboutArticleTwo.classList.add('animate-to-left')
        }
    })
}

// text logo
const logoFirstSpan = document.querySelector('header a h1 span:first-child')
logoFirstSpan.innerText = '<'
const logoLastSpan = document.querySelector('header a h1 span:last-child')
logoLastSpan.innerText = '>'

// navbar
const buttonMenu = document.querySelector('header nav a:last-child')
const nav = document.querySelector('header nav')
const navMenu = document.querySelectorAll('header nav .nav-menu')

// navbar click
buttonMenu.addEventListener('click', (e) => {
    nav.classList.toggle('-translate-y-full')
    drop.classList.toggle('text-pink')
    drop.classList.toggle('text-slate-500')
    drop.classList.toggle('translate-y-16')
    drop.classList.toggle('-scale-y-100')
    navMenu.forEach((e) => {
        e.classList.toggle('-translate-x-full')
    })
    e.preventDefault()
})

// logo animation
const logoBlue = document.querySelectorAll('.animate-logo-blue')
const logoPink = document.querySelectorAll('.animate-logo-pink')

setInterval(() => {
    logoBlue.forEach((e) => {
        e.classList.toggle('animate-logo-blue')
        e.classList.toggle('text-light-blue')
    })
}, 2250);

setInterval(() => {
    logoPink.forEach((e) => {
        e.classList.toggle('animate-logo-pink')
        e.classList.toggle('text-pink')
    })
}, 2250);

// tagline animation
const letterOne = document.querySelector('section article div p .text-light-blue span:nth-child(1)')
const letterTwo = document.querySelector('section article div p .text-light-blue span:nth-child(2)')
const letterThree = document.querySelector('section article div p .text-light-blue span:nth-child(3)')
const letterFour = document.querySelector('section article div p .text-light-blue span:nth-child(4)')
const letterFive = document.querySelector('section article div p .text-light-blue span:nth-child(5)')
const letterSix = document.querySelector('section article div p .text-light-blue span:nth-child(6)')
const letterSeven = document.querySelector('section article div p .text-light-blue span:nth-child(7)')
const letterEight = document.querySelector('section article div p .text-light-blue span:nth-child(8)')
const letterNine = document.querySelector('section article div p .text-light-blue span:nth-child(9)')
const text = [ "a", "1", "@", "b", "2", "#", "c", "3", "$", "d", "4", "%", "e", "5", "&",
"f", "6", "!", "g", "7", "(", "h", "8", ")", "i", "9", "?", "j", "0", "-", "k",
"*", "l", "=", "m", "^", "n", "+", "o", "{", "p", "}", "q", "[", "r", "]", "s",
":", "t", ";", "u", "<", "v", ">", "w", ",", "x", ".", "y", "?", "z", "/"]

function randomIndex() {
    let random = Math.floor(Math.random() * text.length)
    return random
}
function randomText(select,second) {
    let timeStart = new Date().getTime()
    setInterval(()=>{
        if (new Date().getTime() - timeStart > second * 1000) {
            clearInterval
            return
        }
        select.innerText = text[randomIndex()]
    },50)
}
function stopIn(select, letter, second) {
    setTimeout(()=>{
        select.innerText = letter
    },second * 1000)
}

function RandomLetterForText(select, caseOne, caseTwo) {
    randomText(select, 1.99)
    stopIn(select, caseOne, 2)
    setTimeout(()=>{
        randomText(select, 1.99)
    }, 4000)
    stopIn(select, caseTwo, 6)
    setInterval(()=>{
        randomText(select, 1.99)
        stopIn(select, caseOne, 2)
        setTimeout(()=>{
            randomText(select, 1.99)
        }, 4000)
        stopIn(select, caseTwo, 6)
    }, 8000)
}

RandomLetterForText(letterOne, 'P', 'D')
RandomLetterForText(letterTwo, 'r', 'e')
RandomLetterForText(letterThree, 'o', 'v')
RandomLetterForText(letterFour, 'g', 'e')
RandomLetterForText(letterFive, 'r', 'l')
RandomLetterForText(letterSix, 'a', 'o')
RandomLetterForText(letterSeven, 'm', 'p')
RandomLetterForText(letterEight, 'e', 'e')
RandomLetterForText(letterNine, 'r', 'r')

// popup
const popup = document.querySelector('.popup')
const buttonOk = document.querySelector('.popup button')
window.onload = () => {
    setTimeout(()=>{
        popup.classList.toggle('hidden')
        setTimeout(()=>{
            popup.classList.toggle('opacity-0')
        },100)
        popup.classList.toggle('flex')
    }, 4000)
}

// pop up hide
buttonOk.addEventListener('click',()=>{
    setTimeout(()=>{
        popup.classList.toggle('flex')
    },800)
    setTimeout(()=>{
        popup.classList.toggle('hidden')
    },800)
    popup.classList.toggle('opacity-0')
})

// about typing
const textAbout = "Hello, my name is Dindin Imanudin. I'm enthusiastic about programming. That's why I'm currently studying at the Bandung National Institute of Technology, majoring in Informatics. I have experience in developing websites using HTML, CSS, Javascript and now I'm learning React. My vast variety of skills is continuously expanding."

const articleAbout = document.querySelector('.text-about')
const buttonRun = document.querySelector('.button-run')
let charIndex = 0
function typing() {   
    let currentChar = textAbout.substring(0 , charIndex)
    if (charIndex < textAbout.length) {
        charIndex++
        buttonRun.innerHTML = '<div class="custom-loader animate-loading"></div>'
        articleAbout.classList.remove('after:animate-typing')
        setTimeout(typing,50)
    } else {
        buttonRun.innerText = 'Code runed'
        articleAbout.classList.add('after:animate-typing')
    }
    buttonRun.setAttribute('disabled','disabled')
    buttonRun.classList.remove('bg-pink')
    buttonRun.classList.add('bg-light-blue')
    articleAbout.textContent = currentChar
    
}
buttonRun.addEventListener('click',typing)




