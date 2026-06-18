const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/products.models.js');
const productRoute = require("./routes/product.route.js");
const dotenv = require('dotenv');
const app = express()
dotenv.config({ quiet: true });


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
});

mongoose.connect(process.env.MONGO_URI)

    .then(() => {
        console.log("Connected to database");

        const PORT = process.env.PORT || "3000";
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    })
    .catch(() => {
        console.log("Connection failed");
    })