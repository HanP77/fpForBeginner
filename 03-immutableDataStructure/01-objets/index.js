const meal = {
  description: 'Dinner',
};
// 1. In an Immutable way, add a property to the
// meal called calories setting it's value to 200,
// then log the result to the console

const mealWithCalories = {
  ...meal,
  calories: 200
};

console.log(mealWithCalories);

// 2. In an Immutable way, increase the calories 
// by 100 and print the result to the console

const mealWithIncreasedCalories = {
  ...mealWithCalories,
  calories: mealWithCalories.calories + 100,
};

console.log(mealWithIncreasedCalories);

// 3. In an Immutable way, remove the calories property and log the result to the console

const {calories, ...mealWithOutCalories} = mealWithIncreasedCalories;
  

console.log(mealWithOutCalories);