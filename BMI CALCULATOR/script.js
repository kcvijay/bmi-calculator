"use strict";

let inputMetric = document.querySelector(".box--1");
let inputImperial = document.querySelector(".box--2");

let inputHeight = Number(document.getElementById("height").value);
let inputWeight = Number(document.getElementById("weight").value);

let inputFeet = Number(document.getElementById("feet").value);
let inputInch = Number(document.getElementById("inch").value);

const btnMetric = document.getElementById("metric");
const btnImperial = document.getElementById("imperial");

let resultText = document.getElementById("result");

const btnReset = document.getElementById("reset");

btnImperial.addEventListener("click", function () {
  inputMetric.classList.add("hidden");
  inputImperial.classList.remove("hidden");
  btnMetric.style.backgroundColor = "lightgray";
  btnImperial.style.backgroundColor = "green";
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  resultText.textContent = "";
});

btnMetric.addEventListener("click", function () {
  inputImperial.classList.add("hidden");
  inputMetric.classList.remove("hidden");
  btnImperial.style.backgroundColor = "lightgray";
  btnMetric.style.backgroundColor = "green";
  document.getElementById("weight").value = "";
  document.getElementById("inch").value = "";
  document.getElementById("feet").value = "";
  resultText.textContent = "";
});

btnImperial.addEventListener("click", function () {
  document.getElementById("calcBmi").addEventListener("click", function () {
    let inputWeight = Number(document.getElementById("weight").value);
    let resultText = document.getElementById("result");

    let inputFeet = Number(document.getElementById("feet").value);
    let inputInch = Number(document.getElementById("inch").value);
    let bmiImperial =
      inputWeight /
      ((inputFeet * 0.3048 + inputInch * 0.0254) *
        (inputFeet * 0.3048 + inputInch * 0.0254));

    console.log(bmiImperial);
    if (bmiImperial > 15 && bmiImperial < 19) {
      resultText.textContent = `Your BMI is ${bmiImperial.toFixed(
        1
      )} and underweight.`;
    } else if (bmiImperial > 19 && bmiImperial < 25) {
      resultText.textContent = `Your BMI is ${bmiImperial.toFixed(
        1
      )} and normal.`;
    } else if (bmiImperial > 25 && bmiImperial < 30) {
      resultText.textContent = `Your BMI is ${bmiImperial.toFixed(
        1
      )} and mildly overweight.`;
    } else if (bmiImperial > 30) {
      resultText.textContent = `Your BMI is ${bmiImperial.toFixed(
        1
      )} and critically overweight.`;
    } else {
      resultText.textContent = `Data input invalid.`;
    }
  });
});

btnMetric.addEventListener("click", function () {
  document.getElementById("calcBmi").addEventListener("click", function () {
    let inputWeight = Number(document.getElementById("weight").value);
    let inputHeight = Number(document.getElementById("height").value);

    let resultText = document.getElementById("result");

    let bmi = inputWeight / (((inputHeight / 100) * inputHeight) / 100);

    if (bmi > 15 && bmi < 19) {
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
  });
});

btnReset.addEventListener("click", function () {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("feet").value = "";
  idocument.getElementById("inch").value = "";
  document.getElementById("result").textContent = "";
});
