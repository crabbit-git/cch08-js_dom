const renderSkeleton = () => {
  const body = document.querySelector('body');
  const mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Heading';
  body.appendChild(mainHeading);
  
  const introSection = document.createElement('section');
  body.appendChild(introSection);
  introText = document.createElement('p');
  introText.classList.add('intro');
  introText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus cupiditate, et velit molestiae ipsa ipsam magnam, recusandae saepe mollitia aspernatur quam commodi aliquam maiores? Saepe atque provident qui eos temporibus ducimus, sequi adipisci aspernatur laudantium, tempora alias nulla quo obcaecati iste harum! Consequatur fuga animi aperiam minus, eos, rem similique impedit sed est temporibus veniam reiciendis quod, et quis doloremque quam a sint expedita dignissimos laboriosam sapiente! Eveniet ipsam suscipit exercitationem at non repellat dolore porro reprehenderit id veritatis earum quod, totam libero aliquam omnis. Exercitationem esse nam officia unde odio qui, blanditiis provident, recusandae vel libero, veniam iure!';
  introSection.appendChild(introText);
  
  const listSection = document.createElement('section');
  body.appendChild(listSection);
  const subHeading = document.createElement('h2');
  subHeading.textContent = 'Subheading';
  listSection.appendChild(subHeading);
  const listContent = document.createElement('ul');
  listContent.classList.add('list-container');
  listSection.appendChild(listContent);
}

const generateListItem = () => {
  const listContent = document.querySelector('.list-container');
  const listItem = document.createElement('li');
  listItem.textContent = 'This is a list item';
  listContent.appendChild(listItem);
  const itemProperties = document.createElement('ul');
  listItem.appendChild(itemProperties);
  const itemProperty1 = document.createElement('li');
  itemProperty1.textContent = 'This is a property of a list item';
  itemProperties.appendChild(itemProperty1);
  const itemProperty2 = document.createElement('li');
  itemProperty2.textContent = 'This is another property of a list item';
  itemProperties.appendChild(itemProperty2);
}

document.addEventListener('DOMContentLoaded', () => {
  renderSkeleton();
  generateListItem();
  generateListItem();
  generateListItem();
  generateListItem();
  generateListItem();
  generateListItem();
});
