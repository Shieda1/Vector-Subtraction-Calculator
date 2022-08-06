// https://calculator.swiftutors.com/vector-subtraction-calculator.html

const btn = document.getElementById('btn');
const result = document.getElementById('result');

// labels of the inpust
let a1 = document.getElementById('v1');
let b1 = document.getElementById('v2');
let c1 = document.getElementById('v3');
let a2 = document.getElementById('v4');
let b2 = document.getElementById('v5');
let c2 = document.getElementById('v6');

btn.addEventListener('click', function() {

    result.textContent = `Subtraction of Vectors = <${computeA()}, ${computeB()}, ${computeC()}>`;
})

// calculation

function computeA() {
  return Number(a1.value) - Number(a2.value);
}

function computeB() {
  return Number(b1.value) - Number(b2.value);
}

function computeC() {
  return Number(c1.value) - Number(c2.value);
}