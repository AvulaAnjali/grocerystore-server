const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Anjali:Anjali@in-aws.v8sgb.mongodb.net/GroceryStore?retryWrites=true&w=majority&appName=In-AWS")
const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose.connection;

// const db = require('./config/db')