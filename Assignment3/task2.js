var student = ["Micheal","John","Tony"];
var score = [320,230,480];
var totalMarks = 500;
for (var i=0;i<3;i++){
    document.write("Score of " + student[i] + " is " +score[i]+ " .Percentage " +(score[i]/totalMarks)*100+ "%<br>");
}