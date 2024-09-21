const jsonString = '{"name":"John" , "age":30 , "city":"New York"}';
const jsonObject = JSON.parse(jsonString)  //JSON.parse is used to convert the string into json object
console.log(jsonObject)
console.log(jsonObject.name)
console.log(typeof jsonObject)


//JSON.stringify is used to convert the JSON object into string
const objectToConvert = {
    "name":"Alice",
    "age":30
}

const objectString = JSON.stringify(objectToConvert)
console.log(objectString)
console.log(typeof objectString)


