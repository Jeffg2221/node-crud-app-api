const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })
// routes
app.use("/api/products", productRoute);

app.get('/', function (req, res) {
    res.send('Hello World server updated again')
})



mongoose.connect("mongodb+srv://jeffg2221:password.iz2gxkz.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed!");
})
