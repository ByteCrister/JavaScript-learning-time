function Runner(highestScoreRunner) {
    var row = 1,
        max = highestScoreRunner[0][1],
        maxRunnerName = highestScoreRunner[0][0];
    while (row < 5) {
        if (highestScoreRunner[row][1] > max) {
            max = highestScoreRunner[row][1];
            maxRunnerName = highestScoreRunner[row][0];
        }
        row++;
    }
    return maxRunnerName;
}

var highestScoreRunner = [
    ["Ashraful", 95],
    ["Sakib", 19],
    ["Mushfiq", 3],
    ["Mahmudullah", 45],
    ["Mashrafee", 13],
];

console.log(
    "\nHighest score runner from : [ " +
    highestScoreRunner +
    " ]  -> " +
    Runner(highestScoreRunner)
);
