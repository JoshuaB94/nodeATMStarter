"use strict";
//TODO: Import necessary values from account.js
const {pin} = require("./account");
const {balance} = require("./account");
const prompt = require("prompt-sync")();

function getBalance() {
  //TODO: Return the customer's acct. balance
  return balance;
}

function withdraw(withdrawAmount) {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  let withdrawalAmount = parseInt(prompt('Enter the desired amount you want to withdraw '));
  let withdrawalBalance = 'Your balance after withdrawal is ' + parseInt(getBalance() - withdrawalAmount);
  console.log(withdrawalBalance);
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  let depositAmountMade = parseInt(prompt('Enter the amount that you will be depositing '));
  let depositBalance = 'Your balance after deposit is ' + parseInt(getBalance() + depositAmountMade);
  console.log(depositBalance)
}

function validatePin(enteredPin) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.

}

//TODO: Export these functions


//Testing Area-Thallium
// let pinNumber = pin;
// console.log(`This is my pin number: ${pinNumber}`)

// let bankBalance = balance;
// console.log(`This is my bank account balance: ${bankBalance}`);

// let userInput = prompt("What is your name? ")
// console.log(userInput);

// withdraw();
// deposit();
