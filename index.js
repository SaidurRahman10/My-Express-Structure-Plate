const express = require('express');
const cors = require('cors');
const dbConnect = require("./utils/dbConnect");
require("dotenv").config();
const allCarsRoute = require("./Routes/v1/allCars.route")
const errorHandler = require("./middleware/errorHandler")
const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());
// app.use(express.static("public"))
app.set("view engine", "ejs")

dbConnect();

app.use("/api/v1/allCars", allCarsRoute);

app.get("/", (req, res) => {
    //  res.sendFile(__dirname + "/public/index.html");
  res.render("home.ejs", {
    name: "Project Name"
  })
});

app.all("*", (req,res)=>{
   res.render("error.ejs")
  })

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Hey Developer, Your server is running on ${port}`);
  });



  process.on("unhandledRejection", (error) =>{
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  })