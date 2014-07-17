
var Person = function(fName, lName, age, weight, height, friends){
  this.firstName = fName;
  this.lastName = lName;
  this.age = age || 30;
  this.weight = weight || 80;
  this.height = height || Math.floor(Math.random() * (200 - 150) + 150);

  if(friends.length === 0) {
   throw new Error('You have no friends! Please go to Meetup.com right now.');
  }
  else {this.friends = friends;
  }
};

var fullName = function(firstName, lastName) {
  return fullName = firstName + ' ' + lastName;
};

var stonify = function(weight){
  return 'Your weight in stones is ' + (weight * 0.15747);
};

var addFriend = function(friends, newFriend){
  friends.push(newFriend);
};

// read more on splicing AND use of -1/ 1 for decision making
var removeFriend = function(friends, noLongerFriend){
  var i = friends.indexOf(noLongerFriend);
  if(i != -1) {
    friends.splice(i, 1);
  }
};

var greeter = function(greeting, friends){
  if(friends.length === 0) {
   throw new Error('You have no friends! Please go to Meetup.com right now.');
  }
  else {
    greet = greeting || 'Hi!';
    friends.forEach(function(friend) {
      return greet + friend;
    });
  }
};






