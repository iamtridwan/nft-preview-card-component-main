let pageElement = [
    {
        
        img: "url(./images/desktop-image-hero-1.jpg)",
        p: "We provide unmatched quality, comfort, and \
        style for property owners across the country. \
        Our experts combine form and function in bringing your \
        vision to life. Create a room in your \
        own style with our collection and make your property a \
        reflection of you and what you love.",
        h1: "Discover innovative ways to decorate"
    },

    {
       
        img: "url(./images/desktop-image-hero-2.jpg)",
        p: "With stores all over the world, \
        it's easy for you to find furniture for your home or place of business.\
         Locally, we’re in most major cities throughout the country. \
         Find the branch nearest you using our store locator. \
        Any questions? Don't hesitate to contact us today.",
        h1: "We are available all across the globe"
    },

    {
       
        img: "url(./images/desktop-image-hero-3.jpg)",
        p: "Our modern furniture store provide a high level of quality. \
        Our company has invested in advanced technology \
        to ensure that every product is made as perfect \
        and as consistent as possible. With three decades of \
        experience in this industry, we understand what \
        customers want for their home and office.",
        h1: "Manufactured with the best materials"
    }
]
let count = pageElement.length


// selecting element to change

let scrollLeft = document.querySelector("#left")
let scrollRight = document.querySelector("#right")

let h1 = document.querySelector(".highlight h1")
let para = document.querySelector("p")
let img = document.querySelector(".head-content")


// hard coding the changes for the element.
scrollLeft.addEventListener("click", function(){
    count--;
    if(count < 0){
        count = pageElement.length - 1
    };
    img.style.backgroundImage = pageElement[count].img;
    h1.textContent = pageElement[count].h1;
    para.textContent = pageElement[count].p


})
scrollRight.addEventListener("click", function(){
    count++;
    if(count > pageElement.length - 1){
        count = 0
    };
    img.style.backgroundImage = pageElement[count].img;
    h1.textContent = pageElement[count].h1;
    para.textContent = pageElement[count].p


})

//navigation link toggle

const toggleBtn = document.getElementById('icon-toggle');
const toogleIcon = document.getElementById('icon');
let wrapper = document.querySelector('.nav-wrapper');
toggleBtn.addEventListener('click', ()=>{
    if(!wrapper.classList.contains('show-wrapper')){
        wrapper.classList.add('show-wrapper')
        toogleIcon.src = "images/icon-close.svg"
    }
    else{
        wrapper.classList.remove('show-wrapper')
        toogleIcon.src = "images/icon-hamburger.svg"
    }
  
})

