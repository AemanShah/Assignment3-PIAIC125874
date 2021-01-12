var aCities = ["Karachi","Lahore","Islamabad","Faislabad"];
var o = ["th","st","nd","rd"];
for (i=1;i<=aCities.length-1;i++){
    document.write(i+o[i]+" choice is "+aCities[i-1]+"<br>");
}