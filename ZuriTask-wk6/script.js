//setting variables with datasets to make them nodelist
let buttons = document.querySelectorAll('[data-carousel-button]');
// looping through each button to make a function
buttons.forEach(button => {
  //adding a listener
  button.addEventListener("click", () => {
    //setting a rule to add through indexing
    const clockwise = button.dataset.carouselButton === 'next' ? 1 : -1;
    // referencing the parent container and the slides pictures
    const slide = button.closest('[data-carousel]').querySelector('[data-slides]');
    //getting the active slide
    const activeslide = slide.querySelector('[data-active]');
    // convertinng to array and changing the index of activeslide
    let newIndex = [...slide.children].indexOf(activeslide) + clockwise;
    //setting rules to start from the last and first
    if (newIndex < 0) newIndex = slide.children.length - 1;
    if (newIndex >= slide.children.length) newIndex = 0;
    //changing the active role when conditions are met
    slide.children[newIndex].dataset.active = true;
    //deleting the previous active slide
    delete activeslide.dataset.active;
    
  })
});