const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () =>{
        clearAtiveClasses()
        slide.classList.add('active')
    })
}

function clearAtiveClasses(){
    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}