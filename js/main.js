var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

function toggleMenu () {
  $menu.classList.toggle('active')
}
function showMenu () {
  $menu.classList.add('active')
}
function hideMenu () {
  $menu.classList.remove('active')
}
var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');

function mediaQuery() {
  if (consulta.matches) {
    $burguerButton.addEventListener('touchstart', toggleMenu)
  } else {
    $burguerButton.removeEventListener('touchstart', toggleMenu)
  }
}

mediaQuery();

var bLazy = new Blazy({
  selector: 'img'
});

// GESTOS
var $body = document.body;
var gestos = new Hammer($body);
gestos.on('swiperight', function(ev) {
  showMenu()
});

gestos.on('swipeleft', function(ev) {
  hideMenu()
});

// $menu.classList.toggle('active')
