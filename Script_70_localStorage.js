//initial
localStorage.setItem('selectedFontSize', '15');
localStorage.setItem('selectedColor', "7dc936");

let colorAndFont = document.getElementById('background');
colorAndFont.style.backgroundColor = `#${localStorage.getItem('selectedColor')}`;
console.log(colorAndFont);

document.querySelector('#font').addEventListener('change',(e)=>{

    localStorage.setItem('selectedFontSize', e.target.value);
    console.log(localStorage.getItem('selectedFontSize'));

    colorAndFont.style.fontSize = JSON.parse(localStorage.getItem('selectedFontSize'));
})


document.querySelector('#color').addEventListener('change',(e)=>{

    localStorage.setItem('selectedColor',e.target.value)
    colorAndFont.style.backgroundColor = `#${localStorage.getItem('selectedColor')}`;
})


/**********************/

// localStorage.clear()

// localStorage.setItem('userName','admin');
// localStorage.setItem('password','12345');


// console.log(localStorage.getItem('userName'))
// console.log(localStorage.getItem('password'))

// let country = ['Bangladesh', 'India', 'Pakistan'];

// localStorage.setItem('country', JSON.stringify(country));

// console.log(localStorage.getItem('country'));

// let dubCountry = JSON.parse(localStorage.getItem('country'));
// console.log(dubCountry[0]);