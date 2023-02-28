function ArrayOfDrinks(drinks) {
  let result = [];
  for (let drink of drinks) {
    result.push({ name: drink.name, price: drink.price });
  }
 let sorteddrinks= drinks.sort((a,b)=>a.price-b.price)

  return sorteddrinks;
}
console.log(ArrayOfDrinks([ { name: "lemonade", price: 50 },{ name: "lime", price: 10 }]));
