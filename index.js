const prompt = require("prompt-sync") ({sigint: true})



const cart = {
  cartArray: [],
  addToCart(item) {
    return console.log(this.cartArray.push(item))
  },
  removeFromCart(item) {
    return console.log(this.cartArray.splice(this.cartArray.indexOf(item), 1));
  },
};
let continueOp = false;

  
cart.standBy = function () {
    while (!continueOp) {
      const keyword = prompt("Enter a command: ")
      if (keyword=="add") {
        const itemToAdd = prompt("Enter item to add to cart: ")
        this.addToCart(itemToAdd);
        continueOp = false;
      } else if (keyword=="remove")  {
        const itemToRemove = prompt("Enter item to remove from cart: ")
        this.removeFromCart(itemToRemove);
        continueOp = false;
        
      } else if (keyword=="show-items") {
        console.log("Items in the cart are " + this.cartArray.join(", "));
        continueOp = false
      } else if (keyword == "length") {
        console.log(`Items in cart: ${this.cartArray.length}`)
        continueOp = false
      } else if (keyword=="exit") {
        continueOp = true;
        break;
      } else {
          console.log("Invalid Command")
          continueOp = false
      }
  }
}
      
cart.standBy()