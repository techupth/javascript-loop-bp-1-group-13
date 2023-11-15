// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

let totalScore = 0;
let countStudent = 0;
let highScore = 0;
let minScore = 0;
let highScoreName ;
let minScoreName ;

// Start coding here

for (let i in studentsScore){
  totalScore += studentsScore[i]
  countStudent ++
  if(studentsScore[i] > highScore ){
    highScore = studentsScore[i]
    highScoreName = i
  }
  else if (studentsScore[i] < minScore || minScore === 0 ){
    minScore = studentsScore[i]
    minScoreName = i
  }
}
console.log("Average score is " + (totalScore/countStudent))
console.log(`${highScoreName} has the highest score ${highScore} points`)
console.log(`${minScoreName} has lowest score, which is ${minScore} points`)