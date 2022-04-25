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
  const large = document.getElementById("size-large")
  const extraLarge = document.getElementById("size-extra-large")
  const oneTopping = document.getElementById("first-topping")
  const twoTopping = document.getElementById("two-toppings")
  const threeTopping = document.getElementById("three-toppings")
  const fourTopping = document.getElementById("four-toppings")

  // process and output
  var pizzaSize = 0
  var pizzaTopping = 0

  if (large.checked) {
    pizzaSize = 6.0
  }

  if (extraLarge.checked) {
    pizzaSize = 10.0
  }

  if (oneTopping.checked) {
    pizzaTopping = 1.0
  }

  if (twoTopping.checked) {
    pizzaTopping = 1.75
  }

  if (threeTopping.checked) {
    pizzaTopping = 2.5
  }

  if (fourTopping.checked) {
    pizzaTopping = 3.35
  }

  totalCost = (pizzaSize + pizzaTopping) * (1.0 + taxRate)

  document.getElementById("total-cost").innerHTML =
    "The total cost will be: $" + totalCost.toFixed(2)
}
