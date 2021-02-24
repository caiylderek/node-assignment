const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err.message);
    process.exit();
  });
