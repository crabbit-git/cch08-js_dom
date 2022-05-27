const Whisky = require('./models/whisky.js');
const addWhisky = require('./helpers/add_whisky.js');

// When DOM has loaded everything, start waiting for buttons to be pressed:
document.addEventListener('DOMContentLoaded', () => {

  // If there are no whiskies in the list, render a message acknowedging that:
  const naeWhisky = () => {
    if (document.querySelector('.list-container>li') === null) {
    const naeWhiskies = document.createElement('p');
    naeWhiskies.textContent = 'Nae whisky? Whit is this, the High Middle Ages?';
    document.querySelector('.list-container').appendChild(naeWhiskies);
    }
  }

  naeWhisky();

  // When "Clear list" is clicked, empty list and restore "nae whisky" message:
  document.querySelector('#delete-all').addEventListener('click', () => {
    const list = document.querySelector('.list-container');
    while (list.lastChild) {
      list.removeChild(list.lastChild);
    }
    naeWhisky();
  });

  // When "Submit" button is pressed, remove the "nae whisky" message, add
  // the submitted whisky to the list, and clear the form:
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const whisky = new Whisky(
      event.target['name'].value,
      event.target['abv'].value,
      event.target['type'].value,
      event.target['country'].value
    );
    const list = document.querySelector('.list-container');
    const naeWhiskies = list.querySelector('p');
    if (naeWhiskies) {
      list.removeChild(naeWhiskies);
    }
    addWhisky(whisky);
    event.target.reset();
  });

});
