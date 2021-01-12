var x = [10,20,4,40,60,70];
var y = [1,2,3,4,5,6,7,8,9,10];
var union = x.concat(y);
var numArray = union;
numArray.sort(function(x,y) {
  return x - y;
});
numArray = [...new Set(numArray)];
document.write(numArray);