function calculateGrade(){
    const sub1 = Number(prompt("Enter the mark for Subject 1:"));
    const sub2 = Number(prompt("Enter the mark for Subject 2:"));
    const sub3 = Number(prompt("Enter the mark for Subject 3:"));
    const sub4 = Number(prompt("Enter the mark for Subject 4:"));
    const sub5 = Number(prompt("Enter the mark for Subject 5:"));

    if(sub1 < 0 || sub2 < 0 || sub3 < 0 || sub4 < 0 || sub5 < 0){
        alert("Marks cannot be negative!");
        return;
    }

    const totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;

    const averageMarks = totalMarks / 5;

    let grade;

    if (averageMarks >= 90){
        grade = 'A+';
    } else if (averageMarks >= 80 && averageMarks <=89){
        grade = 'A';
    } else if (averageMarks >= 70 && averageMarks <=79){
        grade = 'B';
    } else if (averageMarks >= 60 && averageMarks <=69){
        grade = 'C';
    } else if (averageMarks >= 50 && averageMarks <=59){
        grade = 'D';
    } else {
        grade = 'F'
    }

    alert("Total Marks: " + totalMarks + "\n Average Marks: " + averageMarks + "\n Grade: " + grade); 
}

