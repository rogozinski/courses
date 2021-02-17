//Simple declarations of objects
const person = {
    firstName: "Mick",
    lastName: "Jagger"
}
console.log(person);

const kitchenSink = {
    favNum: 09319024,
    isFunny: true,
    colors: ["red", "orange"]
}
console.log(kitchenSink);

//Object Access Exercise

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206'
}

let fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + restaurant.zipcode;
console.log(fullAddress);