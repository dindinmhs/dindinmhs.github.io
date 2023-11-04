const logoFirstSpan = document.querySelector('header a h1 span:first-child')
logoFirstSpan.innerText = '<'
const logoLastSpan = document.querySelector('header a h1 span:last-child')
logoLastSpan.innerText = '>'


const buttonMenu = document.querySelector('header nav a:last-child')
const drop = document.querySelector('header nav a:last-child span')
const nav = document.querySelector('header nav')
const navMenu = document.querySelectorAll('header nav .nav-menu')

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
buttonOk.addEventListener('click',()=>{
    setTimeout(()=>{
        popup.classList.toggle('flex')
    },800)
    setTimeout(()=>{
        popup.classList.toggle('hidden')
    },800)
    popup.classList.toggle('opacity-0')
})