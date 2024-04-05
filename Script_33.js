var len = document.querySelectorAll(".audio-button").length;
var isPlaying = false;
var audio = null;

for (var i = 0; i < len; i++) {
    document
        .querySelectorAll(".audio-button")[i].addEventListener("click", function () {
            var textNumber = this.innerHTML;

            if (isPlaying) {
                audio.pause();
                isPlaying = false;
            }

            toAudio(textNumber);
        });
}
console.log("\n" + len);

function toAudio(textNumber) {
    switch (textNumber) {
        case "A":
            audio = new Audio("a-1.mp3");
            audio.play();
            isPlaying = true;
            break;

        case "B":
            audio = new Audio("a-2.mp3");
            audio.play();
            isPlaying = true;
            break;

        case "C":
            audio = new Audio("a-3.mp3");
            audio.play();
            isPlaying = true;
            break;
    }
}
