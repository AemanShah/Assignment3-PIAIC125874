document.write("Counting: ");
for (i = 0; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>Reverse counting: ");
for (var i = 10; i >0; i--){
    document.write(i + ", ");
}
document.write("<br>Even: ");
for (i = 0; i <=20; i++){
    if ( i % 2 == 0) {
        document.write(i + ", ");
    }
}
document.write("<br>Odd: ");
for (i = 0; i <=20; i++){
    if ( i % 2 != 0) {
        document.write(i + ", ");
    
    }
}
document.write("<br>Series: ");
for (i = 2; i <=20; i++){
    if ( i % 2 == 0) {
        document.write(i + "k" + ", ");
    }
}