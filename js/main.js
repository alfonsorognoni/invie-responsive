var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

function toggleMenu () {
  $menu.classList.toggle('active')
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

// $menu.classList.toggle('active')
