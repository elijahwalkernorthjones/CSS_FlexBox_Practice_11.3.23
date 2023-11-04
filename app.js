const chakras = document.querySelectorAll('.chakras');

chakras.forEach((chakra) => {
  chakra.addEventListener('click', (e) => {
    e.preventDefault();
    const isEnlarged = chakra.classList.contains('largeChakra');

    // Check if any chakra is currently enlarged
    const enlargedChakra = document.querySelector('.largeChakra');

    if (enlargedChakra) {
      // If a chakra is already enlarged and it's not the one that was clicked, remove the "largeChakra" class and reset its transform
      if (enlargedChakra !== chakra) {
        enlargedChakra.classList.remove('largeChakra');
      }
    }

    // Toggle the "largeChakra" class and transform of the clicked chakra
    if (isEnlarged) {
      chakra.classList.remove('largeChakra');
    } else {
      chakra.classList.add('largeChakra');
    }
  });
});
