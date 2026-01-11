function getAverage (scores) {
  let avgScore = 0;

  for (const score of scores) {
    avgScore += score 
  }

  return avgScore / scores.length
}

function getGrade (score) {
  if (score === 100) return "A+";
  else if (score >= 90) return "A";  
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

function hasPassingGrade (score) {
  return getGrade(score) !== "F"; 
}

function studentMsg (scores, score) {
  let avgScore = getAverage(scores);
  let grade = getGrade(score);
  
  return `Class average: ${avgScore.toFixed(2)}. Your grade: ${grade}. ${hasPassingGrade(score) ? 'You passed the course.' : 'You failed the course.'}`;
}


console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));