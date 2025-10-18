const mongoose = require("mongoose");
const colors = require("colors");

//dot config
require("dotenv").config(); //dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log(
            `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
              .white
          )
    });
    
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
