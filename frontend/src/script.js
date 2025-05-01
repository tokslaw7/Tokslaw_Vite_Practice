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

    document.getElementById('fullName').textContent = `${userData.firstName} ${userData.lastName}`;
    document.getElementById('age').textContent = `Age: ${userData.age}`;
    document.getElementById('email').textContent = `Email: ${userData.contact.email}`;
    document.getElementById('phone').textContent = `Phone: ${userData.contact.phone}`;