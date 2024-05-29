document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


//devs
let cardWrapper = document.querySelector('.card-wrapper');
let cardWidth = document.querySelector('.card').offsetWidth;
let cardCount = document.querySelectorAll('.card').length;
let currentCard = 0;

function moveToRight() {
    if (currentCard < cardCount - 2) {
        currentCard++;
        cardWrapper.style.transform = `translateX(-${currentCard * cardWidth}px)`;
    }
}

function moveToLeft() {
    if (currentCard > 0) {
        currentCard--;
        cardWrapper.style.transform = `translateX(-${currentCard * cardWidth}px)`;
    }
}


//parceiros
$(function() {
  var $clientslider = $('#clientlogo');
  var clients = $clientslider.children().length;
  var clientwidth = (clients * 220); 
  $clientslider.css('width', clientwidth);
  var rotating = true;
  var clientspeed = 1800;
  var seeclients = setInterval(rotateClients, clientspeed);
  $(document).on({
    mouseenter: function() {
      rotating = false;
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#ourclients');
  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clientlogo li:first');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clientlogo li:last').after($first);
      });
    }
  }
});


const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener('click', function () {
  
  alert("Obrigada pela mensagem, em breve entraremos em contato!");
});

const form = document.querySelector('asdsadform')
form.addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('campo').value='';
  console.log('Deu certo')
});

