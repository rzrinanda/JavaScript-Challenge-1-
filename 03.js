//Combine several arrays
//Combine all content inside this arrays into readable sentence.
const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;
var arr = csv.split('\n'); 

var jsonObj = [];
var headers = arr[0].split(',');
for(var i = 1; i < arr.length; i++) {
  var data = arr[i].split(',');
  var obj = {};
  for(var j = 0; j < data.length; j++) {
     obj[headers[j].trim()] = data[j].trim();
  }
  jsonObj.push(obj);
}
console.log(JSON.stringify(jsonObj));
JSON.stringify(jsonObj);