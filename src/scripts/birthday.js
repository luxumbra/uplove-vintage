document.addEventListener('astro:page-load', () => {
  const birthdayEl = document.getElementById('birthday-message');
  if (birthdayEl) {
    const button = birthdayEl.querySelector('button');
    button.addEventListener('click', () => {
      if (birthdayEl.classList.contains('flex')) {
        birthdayEl.style.opacity = '0'
        setTimeout(() => {
          birthdayEl.style.display = 'none';
        }, 1000);
      } else {
        birthdayEl.style.opacity = '1'
      }

    })
  }
})