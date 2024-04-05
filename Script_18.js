function highestScore(score) {

  var maxScore = score[0];
  var index = 1;
  while (index < score.length) {
    if (score[index] > maxScore) {
      maxScore = score[index];
    }
    index++;
  }
  return maxScore;
}

var score = [10, 5, 2, 8, 20, 20, 15];
console.log("Highest score among : ");
for (i = 0; i < score.length; i++) {
  console.log(" " + score[i]);
}
console.log("  -> " + highestScore(score));
