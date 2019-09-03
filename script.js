// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';

header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = 'Article 004';
newParagraph.textContent = 'Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard stares at human while pushing stuff off a table chase dog then run away. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food,';


//appendChild() adds an HTML element to a parent element,adding it after parent's last child
newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('n-2', 'p-2', 'border', 'border-secondary');

/** 
 * setAttribute() takes two arguments: the attribute you want to set, 
followed by the value you want to set for that attribute
*/
newArticle.setAttribute('id', 'art-004');

const main = document.querySelector('main');
main.appendChild(newArticle);