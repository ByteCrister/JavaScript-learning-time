

for (var i = 0; i < 100; i++) {
    try {
        var R = (100 / Math.floor(Math.random() * 10));
        console.log("\n" + R.toFixed(2));
    } catch (e) {
        console.log("\nError at iteration : " + i);
    } finally {
        console.log("\nIteration : " + i + " done.");
    }
}
