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