//You manage a grocery store and need to keep track of the inventory of 
//various items. You will use arrays to store the data and various functions 
//to manipulate and analyze the data. 

//Create an array containing the names of all items in the inventory maximum of 10.
//Create a separate array with the corresponding stock quantities of each item maximum of 10.


let stock=["mango", "apple", "banana", "sweetberries", "ovacado", "guava", "lemon","blueberries", "vegetables", "cassava"];
let stockQuantity=[12,3,4,55,6,8,80,54,23,33];

//Write a function to add a new item to the inventory, updating both arrays.
function add(){
    stock.push("orange");
    stockQuantity.push(20);
   return[stock, stockQuantity]
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
   let x=stock.length
   return x
}
console.log(totalItems())


//Write a function to find the item with the lowest stock quantity.
function lowestQuantity(stockQuantity){
    if(stockQuantity.length <=1){
return stockQuantity;
}
    let middle=Math.floor(stockQuantity.length/2)
    let left=stockQuantity.slice(0,middle)
    let right=stockQuantity.slice(middle)
    return sortedQuantity(lowestQuantity(left), sortedQuantity(right))

}
function sortedQuantity(){
    let emptyarr=[];
    while(left.length && right.length){
        if(left[0] < right[0]){
            emptyarr.push(left.shift())
        }
        else{
            emptyarr.push(right.shift())
        }
    }
    return [...emptyarr,...left,...right]
}
console.log(lowestQuantity(sortedQuantity[-1]))
















