
// You have been given a list of products which is having property productName, quantity and description.

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

/*
PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}
*/

// Solution

function getUniqueProductCount(array, key) {
    let res = key
    return array.reduce(function (ans, item) {
        var p = res(item);
        ans[p] = ans.hasOwnProperty(p) ? ans[p] + 1 : 1;
        return ans;
    }, {})
};

ProductCount = getUniqueProductCount(listOfProducts, function (item) {
    return item.productName
});

console.log(ProductCount); 




/*
2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]
*/

// solution

function getUniqueProducts(listOfProducts){

const uniqueProduct = [...new Set(listOfProducts.map(e=> e.productName))];

let array = []

for(let i = 0; i<uniqueProduct.length;i++){

  let obj = {}

  for(let j = 0; j<listOfProducts.length;j++){
    if(uniqueProduct[i]===listOfProducts[j].productName){
      if (Object.keys(obj).length === 0) {
        obj = listOfProducts[j];
      } 
      else {
        obj.quantity+=listOfProducts[j].quantity;
      } 
    }
  }
  array.push(obj);
}
return array
}

console.log(getUniqueProducts(listOfProducts))


