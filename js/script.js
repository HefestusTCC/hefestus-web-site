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

const form = document.querySelector('asdsadform');
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('campo').value = '';
  //console.log('Deu certo');
});

