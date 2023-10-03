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
let averageScore = 0

for (let i in studentsScore){
  totalScore += studentsScore[i]
  countStudent ++
  console.log(totalScore)
  if(totalScore > averageScore){
    averageScore = totalScore / 5}
  console.log(averageScore)
  console.log(studentsScore[i])
  if(studentsScore[i] > highScore  ){
    highScore = studentsScore[i]
    highScoreName = i }
    console.log(highScoreName)
    if(studentsScore[i] < minScore || minScore === 0){
      minScore = studentsScore[i]
      minScoreName = i 
      console.log(minScoreName)
    }
}
console.log("Average score is " + averageScore)
console.log(highScoreName+" "+"has the highest score, which is" +" "+ highScore +" "+"points.")
console.log(minScoreName+" "+ "has lowest score, which is" + minScore +" "+ "points.")
