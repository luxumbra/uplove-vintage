document.addEventListener('astro:page-load', () => {
  const birthdayEl = document.getElementById('birthday-message');
  if (birthdayEl) {
    const button = birthdayEl.querySelector('button');
    button.addEventListener('click', () => {
      if (birthdayEl.style.display === 'flex') {
        birthdayEl.style.opacity = '1'
      } else {
        birthdayEl.style.opacity = '0'
      }
    })
  }
})