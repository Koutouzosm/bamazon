var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PW,
  database: "bamazon_db"
});


function display() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    var options = "";
    for (var i = 0; i < res.length; i++) {
      options = `Item ID: ${res[i].id} ||| `;
      options += `Product name: ${res[i].product_name} ||| `;
      options += `Department: ${res[i].department_name} " ||| `;
      options += `Price: ${res[i].price} ||| `;
      console.log(options)
    };
    start()
  });
};

display()

function start() {
  inquirer.prompt([{
        name: "whatToBuy",
        type: "input",
        message: "What item would you like to buy? Please select by item ID#",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "howMany",
        type: "input",
        message: "Quantity of purchase?",
        validate: function (value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function (answer) {
      connection.query(`SELECT * FROM products WHERE id =  ${answer.whatToBuy}`, function (err, res) {
        if (err) throw err;
        if (res[0].stock_quantity < answer.howMany) {
          console.log("Sorry, not enough in stock please check stock amount.")
          reRun()
        } else {
          console.log("Your order was placed!")
           console.log(`Your total purchase comes to $${res[0].price * answer.howMany}.00`)
          var updateProducts = `UPDATE products SET stock_quantity = + (${res[0].stock_quantity} - ${answer.howMany}) WHERE id = ${answer.whatToBuy}`
          connection.query(updateProducts, function (err, res) {
            if (err) throw err;
            console.log("Thanks for shopping, have a good day!!")
            reRun()
          });
        };

      });
    });
};

function reRun() {
  inquirer.prompt([{
      type: "confirm",
      name: "rerun",
      message: "Would you like to place another order?"
    }])
    .then(function (answer) {
      if (answer.rerun) {
        start()
      } else {
        console.log("See you again, have a good day!");
        connection.end()
      };
    });
};