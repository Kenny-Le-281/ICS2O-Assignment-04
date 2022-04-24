// Created by: Kenny Le
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-04/sw.js", {
    scope: "/ICS2O-Assignment-04/",
  })
}

;("use strict")

/**
 * This function checks if you guessed the right number.
 */
function total() {
  // input
  const taxRate = 0.13
  const large = parseInt(document.getElementById("size-large").value)
  const extraLarge = parseInt(document.getElementById("size-extra-large").value)
  const oneTopping = parseFloat(document.getElementById("first-topping").value)
  const twoTopping = parseFloat(document.getElementById("two-toppings").value)
  const threeTopping = parseFloat(document.getElementById("three-toppings").value)
  const fourTopping = parseFloat(document.getElementById("four-toppings").value)
  const pizzaSize = parseFloat(document.getElementById("pizza-size").value)
  const pizzaTopping = parseFloat(document.getElementById("pizza-topping").value)

  // process and output
  if (large.Checked == True) {
    pizzaSize = 6.00
  }

  if (extraLarge.Checked == True) {
    pizzaSize = 10.00
  }

  if (oneTopping.Checked == True) {
    pizzaTopping = 1.00
  }

  if (twoTopping.Checked == True) {
    pizzaTopping = 1.75
  }

  if (threeTopping.Checked == True) {
    pizzaTopping = 2.50
  }

  if (fourTopping.Checked == True) {
    pizzaTopping = 3.35
  }

  const totalCost = (pizzaSize + pizzaToping) * (1.00 - taxRate)

  document.getElementById('total-cost').innerHTML = 'The total cost will be:' + totalCost.toFixed(2)
}
