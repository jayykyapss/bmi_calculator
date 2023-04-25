const form = document.querySelector('form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = (weight / (height * height)).toFixed(1);
    
    let resultText = '';
    
    if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = `Your BMI is ${bmi}. You have a healthy weight.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = `Your BMI is ${bmi}. You are overweight.`;
    } else {
        resultText = `Your BMI is ${bmi}. You are obese.`;
    }
    
    resultDiv.textContent = resultText;
});
