const loader = document.querySelector('.loader')
const container = document.querySelector('.container')
setTimeout(() => {
    loader.style.display = 'none'
    container.style.display = 'flex'
}, 3000)

const oranges = document.querySelectorAll('.orange');

// Додаємо обробник подій для кожного елемента .location-circle
oranges.forEach(orange  => {
    window.addEventListener('scroll', (event) => {

    // TODO: check if scroll on block with circles
    //
      oranges.forEach((orange, index) => {
        setTimeout(() => {
          orange.classList.add('full');
        }, index * 150);
      });
    //

  });
});

