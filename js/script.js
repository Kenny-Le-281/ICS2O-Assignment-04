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
  const large = document.getElementById("size-large").checked
  const extraLarge = document.getElementById("size-extra-large").checked
  const oneTopping = document.getElementById("first-topping").checked
  const twoTopping = document.getElementById("two-toppings").checked
  const threeTopping = document.getElementById("three-toppings").checked
  const fourTopping = document.getElementById("four-toppings").checked

  // process and output
  const taxRate = 1.13

  if (large == true) {
    pizzaSize = 6.0
  } else if (extraLarge == true) {
    pizzaSize = 10.0
  }

  if (oneTopping == true) {
    pizzaTopping = 1.0
  } else if (twoTopping == true) {
    pizzaTopping = 1.75
  } else if (threeTopping == true) {
    pizzaTopping = 2.5
  } else if (fourTopping == true) {
    pizzaTopping = 3.35
  }

  totalCost = (pizzaSize + pizzaTopping) * taxRate

  document.getElementById("total-cost").innerHTML =
    "The total cost will be: $" + totalCost.toFixed(2) + "."
}
