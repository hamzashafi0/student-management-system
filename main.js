#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const random_Number = Math.floor(10000 + Math.random() * 90000);
let MyBalance = 0;
let Answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: (chalk.green.bold `Enter student name`),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: (chalk.yellow.bold `Select the course to enrolled`),
        choices: ["MS Office", "HTML", "Javascript", "Typescript", "Python"]
    }
]);
const tution_Fee = {
    "MS Office": 2000,
    "HTML": 3000,
    "javascript": 5000,
    "Typescript": 7000,
    "Python": 10000
};
console.log(`\nTution Fee : ${tution_Fee[Answer.courses]}/-\n`);
console.log(`Balance: ${MyBalance}\n`);
let payment_Type = await inquirer.prompt([
    {
        name: "Payment",
        type: "list",
        message: chalk.blueBright.bold `select payment method`,
        choices: ["Bank transfer", "Easypaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.gray.bold `Transfer Money:`,
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty valve.";
        },
    }
]);
console.log(`\nyou select payment method ${payment_Type.Payment}\n`);
const tutionFees = tution_Fee[Answer.courses];
const paymentamount = parseFloat(payment_Type.amount);
if (tutionFees === paymentamount) {
    console.log(`Congratulation, you have Successfully enrolled in ${Answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: chalk.red.bold `what would you like to do next`,
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.Select === "view status") {
        console.log(chalk.magenta.italic `\n\t********View Status*******\n`);
        console.log(`Student Name: ${Answer.student}`);
        console.log(`Student ID: ${random_Number}`);
        console.log(`Course: ${Answer.courses}`);
        console.log(`Tution Fees Paid ${paymentamount}`);
        console.log(`Balance ${MyBalance += paymentamount}`);
    }
    else {
        console.log("\nExiting Student Managment System\n");
    }
}
else {
    console.log("invalid amount due to course\n");
}
