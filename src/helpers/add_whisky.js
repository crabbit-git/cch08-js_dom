const addWhisky = (whisky) => {
  const listItem = document.createElement('li');
  listItem.classList.add('whisky');
  document.querySelector('.list-container').appendChild(listItem);
  const itemProperties = document.createElement('ul');
  listItem.appendChild(itemProperties);
  const itemProperty1 = document.createElement('li');
  itemProperty1.classList.add('whisky-name');
  itemProperty1.textContent = whisky.name;
  itemProperties.appendChild(itemProperty1);
  const itemProperty2 = document.createElement('li');
  itemProperty1.classList.add('whisky-abv');
  itemProperty2.textContent = `${whisky.abv}% a.b.v.`;
  itemProperties.appendChild(itemProperty2);
  const itemProperty3 = document.createElement('li');
  itemProperty3.classList.add('whisky-type');
  itemProperty3.textContent = whisky.type;
  itemProperties.appendChild(itemProperty3);
  const itemProperty4 = document.createElement('li');
  itemProperty4.classList.add('whisky-country');
  itemProperty4.textContent = whisky.country;
  itemProperties.appendChild(itemProperty4);
}

module.exports = addWhisky;
