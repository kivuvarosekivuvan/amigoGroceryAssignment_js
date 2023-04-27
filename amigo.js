//You manage a grocery store and need to keep track of the inventory of 
//various items. You will use arrays to store the data and various functions 
//to manipulate and analyze the data. 

//Create an array containing the names of all items in the inventory maximum of 10.
//Create a separate array with the corresponding stock quantities of each item maximum of 10.


let stock=["mango", "apple", "banana", "sweetberries", "ovacado", "guava", "lemon","blueberries", "cassava"];
let stockQuantity=[12,23,54,55,18,80,54,26,33];

//Write a function to add a new item to the inventory, updating both arrays.
function add(){
  stock.push("Orange")
  stockQuantity.push(600)
  return [stock,stockQuantity]

   }
let added=add()
console.log(added)

//Write a function to update the stock quantity of an existing item.
function updateQuantity(){
    stockQuantity[6]=20
    return stockQuantity
}
console.log(updateQuantity())


//Write a function to calculate the total number of items in the inventory.
function totalItems(){
   sum=0;
   for(let i=0; i<stockQuantity.length; i++){
      return sum+= stockQuantity[i]
   }
}
console.log(totalItems())

stockQuantity.reduce((a,b)=>{return a+b},0)

// //Write a function to find the item with the lowest stock quantity.
function lowest(){
   let low=Math.min(...stockQuantity)
   let index=stockQuantity.indexOf(low)
   console.log(`The lowest item is` + " " + stock[index])
}
lowest()















