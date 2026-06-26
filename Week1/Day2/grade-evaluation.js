function evaluateGrade(score)
{
    let grade="";
    switch (true) {
        case score>=90:
            grade='A';
            break;
        case score>=75:
            grade='B';
            break;
        case score>=60:
            grade='C';
            break;
         case score>=50:
            grade='D';
            break;
         case score>=40:
            grade='E';
            break;    
        default:
            grade='F';
            break;
    }
    return grade;

}
console.log(evaluateGrade(85));
console.log(evaluateGrade(91));
console.log(evaluateGrade(70));
console.log(evaluateGrade(40));
console.log(evaluateGrade(30));
console.log(evaluateGrade(0));