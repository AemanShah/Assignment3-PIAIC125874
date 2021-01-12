var A = ["cake","apple pie","cookie","chips","patties"];
var userInput = prompt("Welcome to ABC bakery.What do you want to order sir/mam?");
var found = false;
for(var i = 0;i<A.length;i++){
    if(A[i] === userInput.toLowerCase()){
        document.write(userInput+" is <b>available</b> at index "+i+ " on our Bakery");
        found =true;
        break;
    }
}
if(!found){
    document.write("We are sorry "+userInput+ " is <b>not available</b> in our Bakery");
}