let weight = Number(prompt('Enter your weight'));
if(weight==""){alert('Please enter your weight..')}
let height = Number(prompt('Enter your height'));
if(height==""){alert('Please enter your height..')}
let bmi = weight / (height * 2);
console.log(bmi);
if (bmi < 18.5) {
    console.log('Below ideal weight..');
// } else if (weight == "" || height == "") {
//     alert('Please enter your weight and height..');
} else if (18.5 < bmi < 24.9) {
    console.log('At ideal weight..');
} else if (25 < bmi < 29.9) {
    console.log('Above ideal weight..');
} else if (30 < bmi < 39.9) {
    console.log('Well above ideal weight(obese)..');
} else if (bmi > 40) {
    console.log('Well above ideal weight(morbidly obese)..');
} else {
    alert('Goodbye..')

}