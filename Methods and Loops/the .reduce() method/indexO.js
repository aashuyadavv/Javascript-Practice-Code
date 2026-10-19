import { studentsArr } from './withObject.js'

function calculateAverageGrade(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent) {
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateAverageGrade(studentsArr))