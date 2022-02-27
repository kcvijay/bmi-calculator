"use strict";

document.getElementById("calcBmi").addEventListener("click", function () {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  let resultText = document.getElementById("result");

  let bmi = weight / (((height / 100) * height) / 100);

  console.log(height);
  console.log(weight);
  console.log(bmi.toFixed(2));
  if (weight > 0 && height > 0) {
    if (bmi < 15 && bmi > 19) {
      resultText.textContent = `Your BMI is ${bmi.toFixed(1)} and underweight.`;
    } else if (bmi > 19 && bmi < 25) {
      resultText.textContent = `Your BMI is ${bmi.toFixed(1)} and normal.`;
    } else if (bmi > 25 && bmi < 30) {
      resultText.textContent = `Your BMI is ${bmi.toFixed(
        1
      )} and mildly overweight.`;
    } else if (bmi > 30) {
      resultText.textContent = `Your BMI is ${bmi.toFixed(
        1
      )} and critically overweight.`;
    } else {
      resultText.textContent = `Data input invalid.`;
    }
  }
});

document.getElementById("reset").addEventListener("click", function () {
  weight.value = "";
  height.value = "";
  resultText.textContent = "";
});
