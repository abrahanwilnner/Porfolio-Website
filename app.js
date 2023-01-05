//const date = document.getElementById('date');
//date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
 
  navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
  }else{
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
        
    }else{
        navbar.classList.remove("fixed-nav");
       
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
});

//sroll to the correct spot

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function(link) {
    link.addEventListener("click", function(e){
        //prevent default
        e.preventDefault();
       const id = e.currentTarget.getAttribute("href").slice(1);
       const element = document.getElementById(id);
       
       //calculate position
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        //let position = window.scrollY + document.querySelector('#id').getBoundingClientRect().top - navHeight;// Y
        console.log('navHeight');

        if(!fixedNav){
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

       window.scrollTo({
           left:0,
           top: position, 

       });
       linksContainer.style.height = 0;
    });
});
ScrollReveal({ 
    reset: true,
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out"
});
  ScrollReveal().reveal(".slide-up", {
    origin: "bottom"
  });
  ScrollReveal().reveal(".about-left", {
    distance: "100px",
    origin: "left",
  });
  ScrollReveal().reveal(".about-right", {
    origin: "right"
  });
  ScrollReveal().reveal(".sec", {
    origin: "top"
  });ScrollReveal().reveal(".contact-form", {
    origin: "bottom"
  });