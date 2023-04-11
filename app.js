// Assignment 1

// function createAdd(a) {
//     return function(b) {
//       return b + a;
//     }
//   }
//   const addNewNum = createAdd(5);
//   console.log(addNewNum(10)); 
    

// Assignment 2

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let myNum = +prompt("Enter Your Number");

// function searchInArray(arr, val) {

//   if (arr.length === 0) {
//     return false;
//   }
  
//   if (arr[0] === val) {
//     return true;
//   }
  
//   return searchInArray(arr.slice(1), val);
// }

// console.log(searchInArray(myArray, myNum)); 


// Assignment 3

// function addParagraph(myText) {
//   var newParagraphElement = document.createElement("p");
//   var newParagraphText = document.createTextNode(myText); 
//   newParagraphElement.appendChild(newParagraphText);
//    document.getElementById("test").appendChild(newParagraphElement);
// }
// addParagraph("Hello, world!"); 
// console.log(addParagraph("Hello, world!"));

// Assignment 4

// function addListItem(myText) {
//   const ul = document.querySelector("ul"); 
//   const newLi = document.createElement("li"); 
//   const listItemText = document.createTextNode(myText); 
//   li.appendChild(listItemText); 
//   ul.appendChild(newLi);
// }
// addListItem("Unorderd List");


// Assignment 5

// function changeElemBgColor(htmlElement, color) {
//   htmlElement.style.backgroundColor = color;
// }
// const htmlElement = document.getElementById("new_element");
// changeElemBgColor(htmlElement, "green");

// Assignment 6

// function saveToLocalStorage(key, value) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// const myObj = { name: "Abdullah", age: 23, city: "Karachi" };
// saveToLocalStorage("myObject", myObj);
// const retrieveObj = JSON.parse(localStorage.getItem("myObject"));
// console.log(retrieveObj); 

// Assignment 7

// function getFromLocalStorage(key) {
//   const value = localStorage.getItem(key);
//   return JSON.parse(value);
// }
// const myObj = getFromLocalStorage("myObject");
// console.log(myObj);


// Assignment 8

// function saveObjectToLocalStorage(objct) {
 
//   for (const key in objct) {
//     localStorage.setItem(key, JSON.stringify(objct[key]));
//   }
  
//   // Retrieve the object from localStorage
//   const newObj = {};
//   for (const key in objct) {
//     const value = JSON.parse(localStorage.getItem(key));
//     newObj[key] = value;
//   }
  
//   return newObj;
// }
// const myObj = { name: "Abdullah", age: 23, city: "Karachi" };
// const retrieveObj = saveObjectToLocalStorage(myObj);

// console.log(retrieveObj);
