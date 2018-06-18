let menu = {
  _courses: {
    appetizer: [],
    main: [],
    dessert:[]
  },
  
  // Appetizers
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(newAppetizer) {
    this._courses.appetizers.push(newAppetizer);
  },
  
  // Mains
  get main() {
    return this._courses.main;
  },
  set main(newMain) {
  this._courses.main.push(newMain);
},
  
  // Desserts
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(newDessert) {
    this._courses.desserts.push(newDessert);
  },
  
  // Courses
  get courses() {
    return {appetizers: this._courses.appetizers, 
           main: this._courses.main,
           desserts: this._courses.desserts};
  },
  
  // Functions
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizer");
    let main = this.getRandomDishFromCourse("main");
    let dessert = this.getRandomDishFromCourse("dessert");
    let totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}\nThe price is: $${totalPrice}.`;
  }
}

// Generate Menu
menu.addDishToCourse("appetizer", "chips", 5.00);
menu.addDishToCourse("appetizer", "guacamole", 8.00);
menu.addDishToCourse("appetizer", "chicken wings", 4.00);

menu.addDishToCourse("main", "lobster roll", 20.00);
menu.addDishToCourse("main", "cheese burger", 12.50);
menu.addDishToCourse("main", "sushi roll", 10.00);

menu.addDishToCourse("dessert", "cheese cake", 8.25);
menu.addDishToCourse("dessert", "ice cream", 3.00);
menu.addDishToCourse("dessert", "bubble tea", 3.00);

// Generate a random meal
let meal = menu.generateRandomMeal();

// Output
console.log(meal);