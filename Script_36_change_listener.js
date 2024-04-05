
var nameInput = document.querySelector("input[name=input-name]");

nameInput.addEventListener("change", function (event) {

    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.target.className);
    console.log(event.target.id);
    console.log(event.target.value);


});

var checkInputs = document.querySelectorAll("input[name=languages]");

Array.from(checkInputs).map((inMap) => {

    inMap.addEventListener("change", function (event) {
        if (event.target.checked) {
            console.log("Checked");
            console.log(event.target);
            console.log(event.target.value);
        } else {
            console.log("Unchecked");
            console.log(event.target.value);
        }
    });
});


var departmentNames = document.querySelector("select[name=select-department]");

departmentNames.addEventListener("change", function (event) {

    console.log("Selected");
    console.log(event.target.value);
});


var text = document.querySelector("textarea[name=comment]");

text.addEventListener("change", function (event) {

    console.log(event.target);
    console.log(event.target.value);
});