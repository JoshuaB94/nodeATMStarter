"use strict";
//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

const {accountBalance} = require("./atm");
const {accountWithdrawal} = require("./atm");
const {accountDeposit} = require("./atm");
const {accountValidation} = require("./atm");
const prompt = require("prompt-sync")();


function accessATM() {
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
  accountValidation();
}

//TODO: Call accessATM function
accessATM();

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
  let atmMenu = prompt("What kind of transaction would you like to do today?" + '\n' 
    + '1 - Get Current Balance\n'
    + '2 - Make a Deposit\n'
    + '3 - Make a Withdrawal\n'
    + '4 - Quit Transaction\n');

  switch (atmMenu){
    case "1":
      console.log(accountBalance());
      return mainMenu();
    case "2":
      accountDeposit();
      return mainMenu();
    case "3":
      accountWithdrawal();
      return mainMenu();
    case "4":
      return; //Quit Transaction
    default:
      return mainMenu(); //Restarts Main Menu
  }
}

//TODO: Call mainMenu function to start our app!
mainMenu();


//Testing Area-Thallium
