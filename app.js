



const chakras = document.querySelectorAll('.chakras');


// TOGGLE CLASS FUNCTION TO ENLARGE CHAKRAS ON CLICK & ADD LARGE CHAKRA CLASS
chakras.forEach((chakra) => {
  chakra.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('chakra clicked:', chakra)

    const isEnlarged = chakra.classList.contains('largeChakra');
    // console.log('Is enlarged?', isEnlarged);

    // Check if any chakra is currently enlarged
    const enlargedChakra = document.querySelector('.largeChakra');
    // console.log('Enlarged chakra:', enlargedChakra);

    if (enlargedChakra) {
      // console.log('Removing largeChakra class from another chakra:', enlargedChakra);
      // If a chakra is already enlarged and it's not the one that was clicked, remove the "largeChakra" class and reset its transform
      if (enlargedChakra !== chakra) {
        enlargedChakra.classList.remove('largeChakra');
      }
    }

    // Toggle the "largeChakra" class and transform of the clicked chakra
    if (isEnlarged) {
      // console.log('Removing largeChakra class from the clicked chakra:', chakra);
      chakra.classList.remove('largeChakra');
    } else {
      // console.log('Adding largeChakra class to the clicked chakra:', chakra);
      chakra.classList.add('largeChakra');
    }
  });
});
