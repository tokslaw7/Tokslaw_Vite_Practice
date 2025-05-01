import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'





const userData = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
  favoriteMeals: [
    "Sushi Roll",
    "Grilled Cheese Sandwich",
    "Beef Tacos"
  ],
  contact: {
    email: "alice@example.com",
    phone: "555-1234"
  }
};

const stringifiedUserData= JSON.stringify(userData);
console.log(`Stringified JSON: ${stringifiedUserData}`);

const parsedUserData = JSON.parse(stringifiedUserData);
console.log ((parsedUserData));

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>This is a Vite App!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <hr />
    <h2 id="fullName"></h2>
    <h3 id="age"></h3>
    <address>
      <div id="email"></div>
      <div id="phone"></div>
    </address>
    <h4>Favorite Meals:</h4>
    <ul id="list"></ul>
  </div>
`

setupCounter(document.querySelector('#counter'))

document.getElementById('fullName').textContent = `FullName: ${userData.firstName} ${userData.lastName}`;
document.getElementById('age').textContent = `Age: ${userData.age}`;
document.getElementById('email').textContent = `Email: ${userData.contact.email}`;
document.getElementById('phone').textContent = `Phone: ${userData.contact.phone}`;




const favMeals = document.getElementById('list');
userData.favoriteMeals.forEach(meal => {
  const li = document.createElement('li');
  li.textContent = meal;
  favMeals.appendChild(li);
});