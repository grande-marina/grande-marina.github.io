//change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})


//contact buttons(circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
})

//SWIPER JS (gallery section)
var swiper = new Swiper(".mySwiper", {
    //mobilephones
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        //tablets
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        //laptops
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});


const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}
openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
closeNavBtn.addEventListener('click', closeNav);

if(document.body.clientWidth<1024){
    nav.querySelectorAll('li a').forEach(navLink=>{
        navLink.addEventListener('click',closeNav);
    })
}

let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})

if (req.headers["user-agent"] && req.headers["user-agent"].includes("curl")) {
    throw new HttpError("Unauthorized", HttpCode.Unauthorized)
}



