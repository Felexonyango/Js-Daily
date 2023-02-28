function ArrayOfDrinks(drinks) {

 let sorteddrinks= drinks.sort((a,b)=>a.price-b.price)

  return sorteddrinks;
}
console.log(ArrayOfDrinks([ { name: "lemonade", price: 50 },{ name: "lime", price: 10 }]));
