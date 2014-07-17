
var Person = function(fName, lName, age, weight, height, friends){
  this.firstName = fName;
  this.lastName = lName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * (200 - 150) + 150);
  this.friends = friends || 'Error: You have no friends. Please attend two' +
                              ' Meet-Ups each week until remedied.';
};





