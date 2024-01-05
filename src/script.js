// nav scroll
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav-menu')
const header = document.querySelector('header')
const drop = document.querySelector('header nav a:last-child span')
const linkAbout = document.querySelector('#about')
 
const aboutArticleOne = document.querySelector('#about main article:nth-child(1)')
const aboutArticleTwo = document.querySelector('#about main article:nth-child(2)')
const aboutHead = document.querySelector('#about h1')

let lastPostion = 0
window.addEventListener('scroll', ()=>{
    let currentPosition = window.scrollY
    if (currentPosition > lastPostion && nav.className == 'absolute top-0 -z-10 left-0 right-0 h-[55vh] gradient-navbar flex flex-col items-center justify-around duration-200 lg:static lg:inline lg:h-8 lg:translate-y-0 lg:z-0 lg:bg-none -translate-y-full') {
        header.classList.add('-translate-y-full')
        drop.classList.remove('translate-y-16')
    } else if (currentPosition < lastPostion && nav.className == 'absolute top-0 -z-10 left-0 right-0 h-[55vh] gradient-navbar flex flex-col items-center justify-around duration-200 lg:static lg:inline lg:h-8 lg:translate-y-0 lg:z-0 lg:bg-none -translate-y-full'){
        header.classList.remove('-translate-y-full')
        drop.classList.add('translate-y-16')
    }
    lastPostion = currentPosition
})

window.addEventListener('mousemove', (element)=>{
    if (element.clientY <= 45 && nav.className == 'absolute top-0 -z-10 left-0 right-0 h-[55vh] gradient-navbar flex flex-col items-center justify-around duration-200 lg:static lg:inline lg:h-8 lg:translate-y-0 lg:z-0 lg:bg-none -translate-y-full') {
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
        if (top >= offset-1 && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                document.querySelector('.nav-menu[href*=' + id + ']').classList.add('active')
            })
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

function randomIndex(element) {
    let random = Math.floor(Math.random() * element.length)
    return random
}
function randomText(select,second) {
    let timeStart = new Date().getTime()
    setInterval(()=>{
        if (new Date().getTime() - timeStart > second * 1000) {
            clearInterval
            return
        }
        select.innerText = text[randomIndex(text)]
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
        popup.classList.remove('hidden')
        setTimeout(()=>{
            popup.classList.remove('opacity-0')
        },100)
        popup.classList.add('flex')
    }, 4000)
}

// pop up hide
buttonOk.addEventListener('click',()=>{
    setTimeout(()=>{
        popup.classList.remove('flex')
    },800)
    setTimeout(()=>{
        popup.classList.add('hidden')
    },800)
    popup.classList.add('opacity-0')
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


const circles = [...document.querySelectorAll('#skills main article:first-child div span')]
// html mob
function htmlMobRemove(color) {
    circles[17].classList.remove(color)
    circles[19].classList.remove(color)
    circles[20].classList.remove(color)
    circles[21].classList.remove(color)
    circles[22].classList.remove(color)
    circles[23].classList.remove(color)
    circles[27].classList.remove(color)
    circles[28].classList.remove(color)
    circles[33].classList.remove(color)
    circles[35].classList.remove(color)
    circles[37].classList.remove(color)
    circles[39].classList.remove(color)
    circles[40].classList.remove(color)
    circles[42].classList.remove(color)
    circles[43].classList.remove(color)
    circles[44].classList.remove(color)
    circles[49].classList.remove(color)
    circles[50].classList.remove(color)
    circles[51].classList.remove(color)
    circles[53].classList.remove(color)
    circles[55].classList.remove(color)
    circles[57].classList.remove(color)
    circles[59].classList.remove(color)
    circles[60].classList.remove(color)
    circles[65].classList.remove(color)
    circles[67].classList.remove(color)
    circles[69].classList.remove(color)
    circles[71].classList.remove(color)
    circles[75].classList.remove(color)
    circles[76].classList.remove(color)
    circles[81].classList.remove(color)
    circles[83].classList.remove(color)
    circles[85].classList.remove(color)
    circles[87].classList.remove(color)
    circles[91].classList.remove(color)
    circles[92].classList.remove(color)
    circles[93].classList.remove(color)
    circles[94].classList.remove(color)
    circles[118].classList.remove(color)
    circles[119].classList.remove(color)
    circles[120].classList.remove(color)
    circles[121].classList.remove(color)
    circles[134].classList.remove(color)
    circles[150].classList.remove(color)
    circles[151].classList.remove(color)
    circles[152].classList.remove(color)
    circles[153].classList.remove(color)
    circles[169].classList.remove(color)
    circles[185].classList.remove(color)
    circles[198].classList.remove(color)
    circles[199].classList.remove(color)
    circles[200].classList.remove(color)
    circles[201].classList.remove(color)
}
function htmlMobAdd(color) {
    circles[17].classList.add(color)
    circles[19].classList.add(color)
    circles[20].classList.add(color)
    circles[21].classList.add(color)
    circles[22].classList.add(color)
    circles[23].classList.add(color)
    circles[27].classList.add(color)
    circles[28].classList.add(color)
    circles[33].classList.add(color)
    circles[35].classList.add(color)
    circles[37].classList.add(color)
    circles[39].classList.add(color)
    circles[40].classList.add(color)
    circles[42].classList.add(color)
    circles[43].classList.add(color)
    circles[44].classList.add(color)
    circles[49].classList.add(color)
    circles[50].classList.add(color)
    circles[51].classList.add(color)
    circles[53].classList.add(color)
    circles[55].classList.add(color)
    circles[57].classList.add(color)
    circles[59].classList.add(color)
    circles[60].classList.add(color)
    circles[65].classList.add(color)
    circles[67].classList.add(color)
    circles[69].classList.add(color)
    circles[71].classList.add(color)
    circles[75].classList.add(color)
    circles[76].classList.add(color)
    circles[81].classList.add(color)
    circles[83].classList.add(color)
    circles[85].classList.add(color)
    circles[87].classList.add(color)
    circles[91].classList.add(color)
    circles[92].classList.add(color)
    circles[93].classList.add(color)
    circles[94].classList.add(color)
    circles[118].classList.add(color)
    circles[119].classList.add(color)
    circles[120].classList.add(color)
    circles[121].classList.add(color)
    circles[134].classList.add(color)
    circles[150].classList.add(color)
    circles[151].classList.add(color)
    circles[152].classList.add(color)
    circles[153].classList.add(color)
    circles[169].classList.add(color)
    circles[185].classList.add(color)
    circles[198].classList.add(color)
    circles[199].classList.add(color)
    circles[200].classList.add(color)
    circles[201].classList.add(color)
}
// css mob
function cssMobRemove(color) {
    circles[18].classList.remove(color)
    circles[19].classList.remove(color)
    circles[20].classList.remove(color)
    circles[22].classList.remove(color)
    circles[23].classList.remove(color)
    circles[24].classList.remove(color)
    circles[26].classList.remove(color)
    circles[27].classList.remove(color)
    circles[28].classList.remove(color)
    circles[34].classList.remove(color)
    circles[38].classList.remove(color)
    circles[42].classList.remove(color)
    circles[50].classList.remove(color)
    circles[54].classList.remove(color)
    circles[55].classList.remove(color)
    circles[56].classList.remove(color)
    circles[58].classList.remove(color)
    circles[59].classList.remove(color)
    circles[60].classList.remove(color)
    circles[66].classList.remove(color)
    circles[72].classList.remove(color)
    circles[76].classList.remove(color)
    circles[82].classList.remove(color)
    circles[83].classList.remove(color)
    circles[84].classList.remove(color)
    circles[86].classList.remove(color)
    circles[87].classList.remove(color)
    circles[88].classList.remove(color)
    circles[90].classList.remove(color)
    circles[91].classList.remove(color)
    circles[92].classList.remove(color)
    circles[118].classList.remove(color)
    circles[119].classList.remove(color)
    circles[120].classList.remove(color)
    circles[121].classList.remove(color)
    circles[136].classList.remove(color)
    circles[151].classList.remove(color)
    circles[166].classList.remove(color)
    circles[167].classList.remove(color)
    circles[168].classList.remove(color)
    circles[169].classList.remove(color)
    circles[185].classList.remove(color)
    circles[201].classList.remove(color)
    circles[214].classList.remove(color)
    circles[215].classList.remove(color)
    circles[216].classList.remove(color)
    circles[217].classList.remove(color)
}
function cssMobAdd(color) {
    circles[18].classList.add(color)
    circles[19].classList.add(color)
    circles[20].classList.add(color)
    circles[22].classList.add(color)
    circles[23].classList.add(color)
    circles[24].classList.add(color)
    circles[26].classList.add(color)
    circles[27].classList.add(color)
    circles[28].classList.add(color)
    circles[34].classList.add(color)
    circles[38].classList.add(color)
    circles[42].classList.add(color)
    circles[50].classList.add(color)
    circles[54].classList.add(color)
    circles[55].classList.add(color)
    circles[56].classList.add(color)
    circles[58].classList.add(color)
    circles[59].classList.add(color)
    circles[60].classList.add(color)
    circles[66].classList.add(color)
    circles[72].classList.add(color)
    circles[76].classList.add(color)
    circles[82].classList.add(color)
    circles[83].classList.add(color)
    circles[84].classList.add(color)
    circles[86].classList.add(color)
    circles[87].classList.add(color)
    circles[88].classList.add(color)
    circles[90].classList.add(color)
    circles[91].classList.add(color)
    circles[92].classList.add(color)
    circles[118].classList.add(color)
    circles[119].classList.add(color)
    circles[120].classList.add(color)
    circles[121].classList.add(color)
    circles[136].classList.add(color)
    circles[151].classList.add(color)
    circles[166].classList.add(color)
    circles[167].classList.add(color)
    circles[168].classList.add(color)
    circles[169].classList.add(color)
    circles[185].classList.add(color)
    circles[201].classList.add(color)
    circles[214].classList.add(color)
    circles[215].classList.add(color)
    circles[216].classList.add(color)
    circles[217].classList.add(color)
}
// js mob
function jsMobRemove(color) {
    circles[21].classList.remove(color)
    circles[22].classList.remove(color)
    circles[23].classList.remove(color)
    circles[25].classList.remove(color)
    circles[26].classList.remove(color)
    circles[27].classList.remove(color)
    circles[28].classList.remove(color)
    circles[29].classList.remove(color)
    circles[30].classList.remove(color)
    circles[37].classList.remove(color)
    circles[38].classList.remove(color)
    circles[39].classList.remove(color)
    circles[41].classList.remove(color)
    circles[42].classList.remove(color)
    circles[43].classList.remove(color)
    circles[44].classList.remove(color)
    circles[45].classList.remove(color)
    circles[46].classList.remove(color)
    circles[53].classList.remove(color)
    circles[54].classList.remove(color)
    circles[55].classList.remove(color)
    circles[57].classList.remove(color)
    circles[58].classList.remove(color)
    circles[69].classList.remove(color)
    circles[70].classList.remove(color)
    circles[71].classList.remove(color)
    circles[73].classList.remove(color)
    circles[74].classList.remove(color)
    circles[85].classList.remove(color)
    circles[86].classList.remove(color)
    circles[87].classList.remove(color)
    circles[89].classList.remove(color)
    circles[90].classList.remove(color)
    circles[101].classList.remove(color)
    circles[102].classList.remove(color)
    circles[103].classList.remove(color)
    circles[105].classList.remove(color)
    circles[106].classList.remove(color)
    circles[107].classList.remove(color)
    circles[108].classList.remove(color)
    circles[109].classList.remove(color)
    circles[110].classList.remove(color)
    circles[117].classList.remove(color)
    circles[118].classList.remove(color)
    circles[119].classList.remove(color)
    circles[121].classList.remove(color)
    circles[122].classList.remove(color)
    circles[123].classList.remove(color)
    circles[124].classList.remove(color)
    circles[125].classList.remove(color)
    circles[126].classList.remove(color)
    circles[129].classList.remove(color)
    circles[130].classList.remove(color)
    circles[133].classList.remove(color)
    circles[134].classList.remove(color)
    circles[135].classList.remove(color)
    circles[141].classList.remove(color)
    circles[142].classList.remove(color)
    circles[145].classList.remove(color)
    circles[146].classList.remove(color)
    circles[149].classList.remove(color)
    circles[150].classList.remove(color)
    circles[151].classList.remove(color)
    circles[157].classList.remove(color)
    circles[158].classList.remove(color)
    circles[161].classList.remove(color)
    circles[162].classList.remove(color)
    circles[163].classList.remove(color)
    circles[165].classList.remove(color)
    circles[166].classList.remove(color)
    circles[167].classList.remove(color)
    circles[173].classList.remove(color)
    circles[174].classList.remove(color)
    circles[178].classList.remove(color)
    circles[179].classList.remove(color)
    circles[180].classList.remove(color)
    circles[181].classList.remove(color)
    circles[182].classList.remove(color)
    circles[185].classList.remove(color)
    circles[186].classList.remove(color)
    circles[187].classList.remove(color)
    circles[188].classList.remove(color)
    circles[189].classList.remove(color)
    circles[190].classList.remove(color)
    circles[195].classList.remove(color)
    circles[196].classList.remove(color)
    circles[197].classList.remove(color)
    circles[201].classList.remove(color)
    circles[202].classList.remove(color)
    circles[203].classList.remove(color)
    circles[204].classList.remove(color)
    circles[205].classList.remove(color)
    circles[206].classList.remove(color)
}
function jsMobAdd(color) {
    circles[21].classList.add(color)
    circles[22].classList.add(color)
    circles[23].classList.add(color)
    circles[25].classList.add(color)
    circles[26].classList.add(color)
    circles[27].classList.add(color)
    circles[28].classList.add(color)
    circles[29].classList.add(color)
    circles[30].classList.add(color)
    circles[37].classList.add(color)
    circles[38].classList.add(color)
    circles[39].classList.add(color)
    circles[41].classList.add(color)
    circles[42].classList.add(color)
    circles[43].classList.add(color)
    circles[44].classList.add(color)
    circles[45].classList.add(color)
    circles[46].classList.add(color)
    circles[53].classList.add(color)
    circles[54].classList.add(color)
    circles[55].classList.add(color)
    circles[57].classList.add(color)
    circles[58].classList.add(color)
    circles[69].classList.add(color)
    circles[70].classList.add(color)
    circles[71].classList.add(color)
    circles[73].classList.add(color)
    circles[74].classList.add(color)
    circles[85].classList.add(color)
    circles[86].classList.add(color)
    circles[87].classList.add(color)
    circles[89].classList.add(color)
    circles[90].classList.add(color)
    circles[101].classList.add(color)
    circles[102].classList.add(color)
    circles[103].classList.add(color)
    circles[105].classList.add(color)
    circles[106].classList.add(color)
    circles[107].classList.add(color)
    circles[108].classList.add(color)
    circles[109].classList.add(color)
    circles[110].classList.add(color)
    circles[117].classList.add(color)
    circles[118].classList.add(color)
    circles[119].classList.add(color)
    circles[121].classList.add(color)
    circles[122].classList.add(color)
    circles[123].classList.add(color)
    circles[124].classList.add(color)
    circles[125].classList.add(color)
    circles[126].classList.add(color)
    circles[129].classList.add(color)
    circles[130].classList.add(color)
    circles[133].classList.add(color)
    circles[134].classList.add(color)
    circles[135].classList.add(color)
    circles[141].classList.add(color)
    circles[142].classList.add(color)
    circles[145].classList.add(color)
    circles[146].classList.add(color)
    circles[149].classList.add(color)
    circles[150].classList.add(color)
    circles[151].classList.add(color)
    circles[157].classList.add(color)
    circles[158].classList.add(color)
    circles[161].classList.add(color)
    circles[162].classList.add(color)
    circles[163].classList.add(color)
    circles[165].classList.add(color)
    circles[166].classList.add(color)
    circles[167].classList.add(color)
    circles[173].classList.add(color)
    circles[174].classList.add(color)
    circles[178].classList.add(color)
    circles[179].classList.add(color)
    circles[180].classList.add(color)
    circles[181].classList.add(color)
    circles[182].classList.add(color)
    circles[185].classList.add(color)
    circles[186].classList.add(color)
    circles[187].classList.add(color)
    circles[188].classList.add(color)
    circles[189].classList.add(color)
    circles[190].classList.add(color)
    circles[195].classList.add(color)
    circles[196].classList.add(color)
    circles[197].classList.add(color)
    circles[201].classList.add(color)
    circles[202].classList.add(color)
    circles[203].classList.add(color)
    circles[204].classList.add(color)
    circles[205].classList.add(color)
    circles[206].classList.add(color)
}
circles.forEach((circle)=>{
    setTimeout(()=>{
        circle.classList.remove('bg-orange-500', 'bg-white')
        circle.classList.add('bg-sky-500')
        cssMobRemove('bg-sky-500')
        cssMobAdd('bg-white')
    },7800)
    setTimeout(()=>{
        circle.classList.remove('bg-sky-500')
        circle.classList.remove('bg-white')
        circle.classList.add('bg-yellow-500')
        jsMobRemove('bg-yellow-500')
        jsMobAdd('bg-white')
    },13600)
    setInterval(()=>{
        setTimeout(()=>{
            circle.classList.remove('bg-yellow-500')
            circle.classList.remove('bg-white')
            circle.classList.add('bg-orange-500')
            htmlMobRemove('bg-orange-500')
            htmlMobAdd('bg-white')
        },2000)
        setTimeout(()=>{
            circle.classList.remove('bg-orange-500', 'bg-white')
            circle.classList.add('bg-sky-500')
            cssMobRemove('bg-sky-500')
            cssMobAdd('bg-white')
        },7800)
        setTimeout(()=>{
            circle.classList.remove('bg-sky-500')
            circle.classList.remove('bg-white')
            circle.classList.add('bg-yellow-500')
            jsMobRemove('bg-yellow-500')
            jsMobAdd('bg-white')
        },13600)
    }, 19400)
})

// project slide
const nextSlide = document.querySelector('.next-slide')
const backSlide = document.querySelector('.back-slide')
const projectList = document.querySelectorAll('#project main figure .shrink-0')
const backgroundProject = document.querySelector('#project main')
const projectName = document.querySelector('#project h2')
const projectDescription = document.querySelector('#project p')
const linkProject = document.querySelector('#project main a')
const descriptionSect = document.querySelector('#project main .description')

let i = 0
let margin = 0
const backgroundProjectList = ["bg-[url('/src/public/teahouse.png')]", "bg-[url('/src/public/kitaweb.png')]"]
const projectNameList = ['Tea House', 'Kita Web']
const linkProjectList = ['https://teahouseweb.netlify.app/', 'https://kitaweb-mu.vercel.app/']
const projectDescriptionList = ['Create interactive and responsive coffee shop web templates using HTML, CSS and Javascript', 'develop a responsive company profile website using Next.js (Tailwind CSS and React)']

// backSlide.removeAttribute("disabled")
// next slide
nextSlide.addEventListener('click', (e)=>{
    if (i >= projectList.length - 2) {
        nextSlide.setAttribute('disabled','disabled')
        nextSlide.classList.add('opacity-50')
        nextSlide.classList.remove('active:bg-light-blue')
    }
    if (window.innerWidth >= 1024) {
        margin = margin + 260
        projectList[0].style.marginLeft = `-${margin}px`
    } else {
        margin = margin + 180
        projectList[0].style.marginLeft = `-${margin}px`
    }
    projectName.textContent = projectNameList[i+1]
    projectDescription.textContent = projectDescriptionList[i+1]
    backgroundProject.className = "w-10/12 h-5/6 bg-cover m-auto relative shadow-2xl"
    linkProject.setAttribute('href',linkProjectList[i+1])
    backgroundProject.classList.add(backgroundProjectList[i+1])
    // animation
    descriptionSect.classList.add('animate-[to-up_0.4s]')
    setTimeout(()=>{
        descriptionSect.classList.remove('animate-[to-up_0.4s]')
    },400)
    projectList[i].classList.toggle('h-full')
    projectList[i].classList.toggle('lg:h-72')
    projectList[i].classList.toggle('h-52')
    projectList[i+1].classList.toggle('h-full')
    projectList[i+1].classList.toggle('lg:h-72')
    projectList[i+1].classList.toggle('h-52')
    backSlide.removeAttribute("disabled")
    backSlide.classList.remove("opacity-50")
    backSlide.classList.add("active:bg-light-blue")
    i++
})
// back slide
backSlide.addEventListener('click', (e)=>{
    if (i == 1) {
        backSlide.setAttribute('disabled','disabled')
        backSlide.classList.add('opacity-50')
        backSlide.classList.remove('active:bg-light-blue')
    }
    if (window.innerWidth >= 1024) {
        margin = margin - 260
        projectList[0].style.marginLeft = `-${margin}px`
    } else {
        margin = margin - 180
        projectList[0].style.marginLeft = `-${margin}px`
    }
    projectName.textContent = projectNameList[i-1]
    projectDescription.textContent = projectDescriptionList[i-1]
    backgroundProject.className = "w-10/12 h-5/6 bg-cover m-auto relative shadow-2xl"
    linkProject.setAttribute('href',linkProjectList[i-1])
    backgroundProject.classList.add(backgroundProjectList[i-1])
    // animation
    descriptionSect.classList.add('animate-[to-up_0.4s]')
    setTimeout(()=>{
        descriptionSect.classList.remove('animate-[to-up_0.4s]')
    },400)
    projectList[i].classList.toggle('h-full')
    projectList[i].classList.toggle('lg:h-72')
    projectList[i].classList.toggle('h-52')
    projectList[i-1].classList.toggle('h-full')
    projectList[i-1].classList.toggle('lg:h-72')
    projectList[i-1].classList.toggle('h-52')
    nextSlide.removeAttribute("disabled")
    nextSlide.classList.remove("opacity-50")
    nextSlide.classList.add("active:bg-light-blue")
    i--
})

// get in touch
const planeButton = document.querySelector('.plane')
const maskCircuit = document.querySelector('.mask-circuit')

planeButton.addEventListener('mouseover',()=>{
    maskCircuit.classList.remove('bg-[length:300%_300%]')
    maskCircuit.classList.add('bg-[length:100%_100%]')
})
planeButton.addEventListener('mouseout',()=>{
    maskCircuit.classList.remove('bg-[length:100%_100%]')
    maskCircuit.classList.add('bg-[length:300%_300%]')
})

const emailInput = document.querySelector('.email-input')
const emailLabel = document.querySelector('.email-label')

emailInput.addEventListener('focusin',()=>{
    emailLabel.classList.add('peer-invalid/email:-translate-y-[2.75rem]')
    emailLabel.classList.add('peer-invalid/email:text-base')
})
emailInput.addEventListener('focusout',()=>{
    if (emailInput.value.length < 1) {
        emailLabel.classList.remove('peer-invalid/email:-translate-y-[2.75rem]')
        emailLabel.classList.remove('peer-invalid/email:text-base')
    }
})

const form = document.querySelector('.form')
const closeButton = document.querySelector('.close')

const innerForm = document.querySelectorAll('form > *')
const loader = document.querySelector('form .custom-loader')
const buttonSubmit = document.querySelector('form button[type*=submit]')
// form show
planeButton.addEventListener('click',()=>{
        form.classList.remove('hidden')
        setTimeout(()=>{
            form.classList.remove('opacity-0')
        },100)
        form.classList.add('flex')
        loader.classList.add('hidden')
        emailLabel.classList.remove('peer-invalid/email:-translate-y-[2.75rem]')
        emailLabel.classList.remove('peer-invalid/email:text-base')
        innerForm[1].textContent = 'Get In Touch'
        innerForm[2].classList.add('hidden')
        innerForm[3].classList.remove('hidden')
        innerForm[4].classList.remove('hidden')
        innerForm[5].classList.remove('hidden')
        innerForm[6].classList.remove('hidden')
        innerForm[7].classList.remove('hidden')
        innerForm[8].classList.remove('hidden')
        buttonSubmit.classList.remove('hidden')
    }
)
// form hide
// pop up hide
closeButton.addEventListener('click',()=>{
    setTimeout(()=>{
        closeButton.parentElement.parentElement.classList.remove('flex')
    },800)
    setTimeout(()=>{
        closeButton.parentElement.parentElement.classList.add('hidden')
    },800)
    closeButton.parentElement.parentElement.classList.add('opacity-0')
})
// form spreadsheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbwUfEzmhA9UKbc7zqfAV_975Igd9cw30lkC4Lo1e3TyQ5kRnGpkUyGxdr4pzFe7weal/exec';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.forms['submit-to-google-sheet'];
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await innerForm[0].classList.add('hidden')
        await buttonSubmit.classList.add('hidden')
        await loader.classList.remove('hidden')
        await loader.classList.add('grid')
        await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        try {
            innerForm[0].classList.remove('hidden')
            innerForm[1].textContent = 'Thank You!'
            innerForm[2].classList.remove('hidden')
            innerForm[2].textContent = 'Your message has been received, thank you for contacting me.'
            innerForm[3].classList.add('hidden')
            innerForm[4].classList.add('hidden')
            innerForm[5].classList.add('hidden')
            innerForm[6].classList.add('hidden')
            innerForm[7].classList.add('hidden')
            innerForm[8].classList.add('hidden')
        } catch (error) {
            innerForm[0].classList.remove('hidden')
            innerForm[1].textContent = 'Failed!'
            innerForm[2].classList.remove('hidden')
            innerForm[2].textContent = 'Sorry, your message cannot be sent at this time. Please repeat the shipping process or contact us directly.'
            innerForm[3].classList.add('hidden')
            innerForm[4].classList.add('hidden')
            innerForm[5].classList.add('hidden')
            innerForm[6].classList.add('hidden')
            innerForm[7].classList.add('hidden')
            innerForm[8].classList.add('hidden')
        }
    });
});
