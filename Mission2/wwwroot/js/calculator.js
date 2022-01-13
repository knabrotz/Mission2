$("#calcButton").click(function () {

    // Pulls inputted grade values from form and determines weighted grade

    let grade = (
        ($("#assignments").val() * .55) +
        ($("#groupproject").val() * .05) +
        ($("#quizzes").val() * .1) +
        ($("#exams").val() * .2) +
        ($("#intex").val() * .1)
    );

    // Determines letter grade based on numeric grade

    if (grade >= 94) {
        letterGrade = 'A';
    } else if (grade >= 90) {
        letterGrade = 'A-';
    } else if (grade >= 87) {
        letterGrade = 'B+';
    } else if (grade >= 84) {
        letterGrade = 'B';
    } else if (grade >= 80) {
        letterGrade = 'B-';
    } else if (grade >= 77) {
        letterGrade = 'C+';
    } else if (grade >= 74) {
        letterGrade = 'C';
    } else if (grade >= 70) {
        letterGrade = 'C-';
    } else if (grade >= 67) {
        letterGrade = 'D+';
    } else if (grade >= 64) {
        letterGrade = 'D';
    } else if (grade >= 60) {
        letterGrade = 'D-';
    } else {
        letterGrade = 'E';
    }

    gradetxt = "Your grade: " + grade.toFixed(2) + ' (' + letterGrade + ')';

$("#grade").text(gradetxt);

})