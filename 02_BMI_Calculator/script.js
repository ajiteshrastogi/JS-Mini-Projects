let ans = document.querySelector("button");

ans.addEventListener("click", function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = `<span style="color: red;">Please enter valid height OR weight</span>`;
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = "";
    if (bmi < 18.6) {
        message = `<span style="color: orange;">You are Underweight. Try to gain!</span>`;
    } else if (bmi > 24.9) {
        message = `<span style="color: red;">You are Overweight. Try to lose!</span>`;
    } else {
        message = `<span style="color: green;">You are Normal. So be happy!</span>`;
    }

    result.innerHTML = `<span> Your BMI is ${bmi} kg/m² </span><br>${message}`;
    
});
