const jsonString = '{"name": "john", "age": 25, "city": "NewYork"}';

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);


const objectConverter = {name: "Alice ", age:25};
const jsonStringified =  JSON.stringify(objectConverter)

console.log(jsonStringified);
