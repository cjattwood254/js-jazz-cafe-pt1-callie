// 1 - Create an object literal called `menu` representing the menu of a jazz cafe with the 
//following properties: drink, appetizer, mainCourse
let menu = {
    drink: "",
    appetizer: "",
    mainCourse: "",
}


// 2 - Assign values to the properties using the dot notation 
//(e.g., "Espresso", "Bruschetta", "Salmon Steak")
menu.drink = "Espresso";
menu.appetizer = "Bruschetta";
menu.mainCourse = "Salmon Steak";
console.log(menu);

// 3 - Create a variable called `specials` and assign it to an empty object literal
var specials = {};


// 4 - Add properties to `specials` using the bracket notation for the following specials: 
//"Drink Special", "Appetizer Special", "Main Course Special"
specials["Drink Special"];
specials ["Appetizer Special"];
specials ["Main Course Special"];

// 5 - Assign special items (e.g., "Blue Note Cocktail", "Jazz Trio Sampler", "Miles Davis Ribeye") 
//to each special using the dot notation
specials.specialDrink = "Blue Note Cocktail";
specials.specialAppetizer = "Jazz Trio Sampler";
specials.specialMainCourse = "Miles Davis Ribeye";
console.log(specials)


// 6 - Create an empty array called `playlist`
playlist = [];


// 7 - Use the push() method to add at least 3 jazz songs to the `playlist` array (e.g., "Take Five", 
//"So What", "My Favorite Things")
playlist.push("Take Five", "So What", "My Favorite Things");


// 8 - Use the pop() method to remove the last song from the `playlist` array
playlist.pop();
console.log(playlist);

// 9 - Create a variable called `totalSongs` and set it equal to the length of the `playlist` array
var totalSongs = playlist.length


// 10 - Create a variable called `roundedTotalSongs` and use Math.ceil() to round up the value of 
//`totalSongs`
var roundedTotalSongs = Math.ceil(totalSongs)
console.log(roundedTotalSongs);

// 11 - Create a variable called `daysRemaining` to show the days remaining for the special menu items
//and set it to 7
var daysRemaining = 7
console.log(daysRemaining);


// 12 - Create a while loop that decrements `daysRemaining` by 1 each iteration, and console logs the 
//current value of `daysRemaining`
while(daysRemaining > 0){
    daysRemaining--;
    console.log(daysRemaining);
}



// 13 - Create a string variable called `message` and set it to an empty string
var message = ""


// 14 - Use concat() to concatenate the strings "Welcome to our jazz cafe! Our menu features " with the 
//value of the `mainCourse` property from `menu`
message = message.concat("Welcome to our jazz cafe! Our menu features ", menu.mainCourse);


// 15 - Use concat() to concatenate the string ", and our specials include " with the value of the 
//"Drink Special" property from `specials`
message += message.concat(", and our specials include ", specials.specialDrink);


// 16 - Use concat() to concatenate the string ", along with our playlist of " with the value of the 
//`totalSongs` variable
message += message.concat(", along with our playlist of ", totalSongs);


// 17 - Use toUpperCase() to convert the entire `message` string to uppercase
wholeMessage = message.toUpperCase();


// 18 - Console log the `message` string
console.log(wholeMessage);