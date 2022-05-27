const Whisky = require('./models/whisky.js');
const addWhisky = require('./helpers/add_whisky.js');

// When DOM has loaded everything, start waiting for buttons to be pressed:
document.addEventListener('DOMContentLoaded', () => {

  // When Clear button is pressed, empty the list:
  document.querySelector('#delete-all').addEventListener('click', () => {
    const list = document.querySelector('.list-container');
    while (list.lastChild) {
      list.removeChild(list.lastChild);
    }
  });

  // When Submit button is pressed, add whisky to the list and clear the form:
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const whisky = new Whisky(
      event.target['name'].value,
      event.target['abv'].value,
      event.target['type'].value,
      event.target['country'].value
    );
    addWhisky(whisky);
    event.target.reset();
  });

});
