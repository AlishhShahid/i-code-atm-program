#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 20000; // In dollar
let myPin = 11444;

console.log("AlishhShahid - ATM machine!");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code:",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Select an operation:",
      type: "list",
      choices: ["quickcash", "withdraw", "check balance"],
    },
  ]);
  if (operationAnswer.operation === "quickcash") {
    let quick = await inquirer.prompt([
      {
        name: "cash",
        message: "Choose an amount",
        type: "list",
        choices: ["15000", "10000", "5000", "1000"],
      },
    ]);
    myBalance -= quick.cash;
    console.log("Your remaining balance is: " + myBalance);
  } else if (operationAnswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
      },
    ]);
    
    if (amountAnswer.amount > myBalance) {
      console.log("Insufficient balance!!!");
    } else {
      myBalance -= amountAnswer.amount;
      console.log("Your remaining balance is: " + myBalance);
    }
  } else if (operationAnswer.operation === "check balance") {
    console.log("Your balance is: " + myBalance);
  }
} else {
  console.log("Incorrect pin code!!!");
}
