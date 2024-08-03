import GLightbox from 'glightbox';

function initialize() {
  const lightbox = GLightbox({
    touchNavigation: true,
    closeButton: true,
    loop: true,
    width: "100vw",
    height: "100vh",
    preload: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'fade',
    dragAutoSnap: true,
    cssEfects: {
      fade: { in: 'fadeIn', out: 'fadeOut' }
    }
  });
}

document.addEventListener('astro:page-load', initialize);
document.addEventListener('astro:after-swap', initialize);