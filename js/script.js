document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list li a");
  const footerLinks = document.querySelectorAll(".footer-col li a");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });

    footerLinks.forEach(function (footerLinks) {
      footerLinks.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });


    
    })
  });

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      1560: {
        slidesPerView: 3,
      },
    },
  });
});

const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', function () {
  alert("Obrigada pela mensagem, em breve entraremos em contato!");
});

$('.form').submit(function(event) {
  event.preventDefault();
  $.ajax({
    url: 'https://api.staticforms.xyz/submit', // url where to submit the request
    type: "POST", // type of action POST || GET
    dataType: 'json', // data type
    data: $(".form").serialize(), // post data || get data
    success: function(result) {
      this.reset()
    },
    error: function(xhr, resp, text) {
      this.reset()
    }
    
  })
  this.reset()
});


document.addEventListener('DOMContentLoaded', (event) => {
  const checkbox = document.getElementById('chk');
  checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    document
      .querySelectorAll(
        ".navbar, .label, .label .ball, li a, .desc-empresa, .container-projetos, .projeto, .card, .devs, .conhecaEquipe, .container-devs .swiper-slide, .container-devs .swiper-slide p, .div-parceiros, .form-title, .form, .btnEnviar, .form label, footer, .footer-col h4, .footer-col, .footer-col .social-links a, .footer-col .social-links a:hover, .copyright, h4, .timeline-container p, .timeline-block .heading, .timeline-block .text, .timeline-block .iconic, .timeline-block:hover .iconic, .container-devs .swiper-pagination-bullet-active, .container-devs .swiper-pagination-bullet, .timeline-block, hr "
      )
      .forEach((element) => {
        element.classList.toggle("light-mode");
      });
  });
});

/* Slider*/

const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
const time = 5000; // Time for automatic slide transition

// Function to update the display of images and dots
const updateSlide = (index) => {
  imgs.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
  
  dots.forEach((dot, i) => {
    dot.classList.toggle("fa-dot-circle", i === index);
    dot.classList.toggle("fa-circle", i !== index);
  });
};

// Initialize the slider
updateSlide(currentIndex);

// Event listener for the left arrow
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex <= 0) ? imgs.length - 1 : currentIndex - 1;
  updateSlide(currentIndex);
});

// Event listener for the right arrow
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex >= imgs.length - 1) ? 0 : currentIndex + 1;
  updateSlide(currentIndex);
});

// Function to start the automatic slide transition
const startAutoSlide = () => {
  setInterval(() => {
    currentIndex = (currentIndex >= imgs.length - 1) ? 0 : currentIndex + 1;
    updateSlide(currentIndex);
  }, time);
};

// Start the automatic slide transition
startAutoSlide();
