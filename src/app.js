const Whisky = require('./models/whisky.js');

const generateListItem = (whisky) => {
  const container = document.querySelector('.list-container');
  const listItem = document.createElement('li');
  container.appendChild(listItem);
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

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const whisky = new Whisky(
      event.target['name'].value,
      event.target['abv'].value,
      event.target['type'].value,
      event.target['country'].value
    );
    generateListItem(whisky);
    event.target.reset();
  });
});

// For no real reason other than experimentation, I originally had all of the
// following code at the top of the file then called it, rather than writing
// directly into index.html like a normal person. I got bored of it eventually.
// const renderSkeleton = () => {
//   const body = document.querySelector('body');
//   const mainHeading = document.createElement('h1');
//   mainHeading.textContent = 'Heading';
//   body.appendChild(mainHeading);
  
//   const introSection = document.createElement('section');
//   body.appendChild(introSection);
//   introText = document.createElement('p');
//   introText.classList.add('intro');
//   introText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus cupiditate, et velit molestiae ipsa ipsam magnam, recusandae saepe mollitia aspernatur quam commodi aliquam maiores? Saepe atque provident qui eos temporibus ducimus, sequi adipisci aspernatur laudantium, tempora alias nulla quo obcaecati iste harum! Consequatur fuga animi aperiam minus, eos, rem similique impedit sed est temporibus veniam reiciendis quod, et quis doloremque quam a sint expedita dignissimos laboriosam sapiente! Eveniet ipsam suscipit exercitationem at non repellat dolore porro reprehenderit id veritatis earum quod, totam libero aliquam omnis. Exercitationem esse nam officia unde odio qui, blanditiis provident, recusandae vel libero, veniam iure!';
//   introSection.appendChild(introText);
  
//   const listSection = document.createElement('section');
//   body.appendChild(listSection);

//   const listHeading = document.createElement('h2');
//   listHeading.textContent = 'List heading';
//   listSection.appendChild(listHeading);
//   const listContent = document.createElement('ul');
//   listContent.classList.add('list-container');
//   listSection.appendChild(listContent);

//   const formHeading = document.createElement('h2');
//   formHeading.textContent = 'Add a list item';
//   listSection.appendChild(formHeading);
//   const form = document.createElement('form');
//   listSection.appendChild(form);
//   const formSection1 = document.createElement('div');
//   form.appendChild(formSection1);
//   const formField1Label = document.createElement('label');
//   formField1Label.setAttribute('for', 'field1');
//   formField1Label.textContent = 'Field 1:';
//   formSection1.appendChild(formField1Label);
//   const formField1Input = document.createElement('input');
//   formField1Input.setAttribute('type', 'text');
//   formSection1.appendChild(formField1Input);
//   const formSection2 = document.createElement('div');
//   form.appendChild(formSection2);
//   const formField2Label = document.createElement('label');
//   formField2Label.setAttribute('for', 'field2');
//   formField2Label.textContent = 'Field 2:';
//   formSection2.appendChild(formField2Label);
//   const formField2Input = document.createElement('input');
//   formField2Input.setAttribute('type', 'text');
//   formSection2.appendChild(formField2Input);
//   const formSection3 = document.createElement('div');
//   form.appendChild(formSection3);
//   const formField3Label = document.createElement('label');
//   formField3Label.setAttribute('for', 'field3');
//   formField3Label.textContent = 'Field 3:';
//   formSection3.appendChild(formField3Label);
//   const formField3Opt1 = document.createElement('input');
//   formField3Opt1.setAttribute('type', 'radio');
//   formField3Opt1.setAttribute('value', 'option1');
//   formSection3.appendChild(formField3Opt1);
//   const formField3Opt1Label = document.createElement('label');
//   formField3Opt1Label.setAttribute('for', 'option1');
//   formField3Opt1Label.textContent = 'Option 1';
//   formField3Opt1.appendChild(formField3Opt1Label);
// }
