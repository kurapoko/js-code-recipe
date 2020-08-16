// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const jsonString = `
{
  "students": 40,
  "grade": 4,
  "name": "c組"
}
`;

const data = JSON.parse(jsonString);
appDiv.innerHTML+=data.name;
appDiv.innerHTML+=data.grade;

const myArray = ['鈴木', '田中', '高橋', '後藤'];

const targetUser = myArray.find((element) => element === '田中');

appDiv.innerHTML+=targetUser;

