var a = [24, 53, 78, 91, 12];
var largestNum= 0;
document.write("Array item is :"+a);
for (i=0; i<=largestNum;i++){
    if (a[i]>largestNum) {
        var largestNum=a[i];
    }
} 
document.write("<br>Largest number is :"+largestNum);