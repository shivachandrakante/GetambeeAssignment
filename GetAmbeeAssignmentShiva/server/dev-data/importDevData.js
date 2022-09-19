const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./../config.env" });
const userData = require("./../model/postmodel");
//console.log(process.env);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(console.log("Connection Successful"))
  .catch((err) => console.log(err));

const sampledata = JSON.parse(
  fs.readFileSync(`${__dirname}/sampledata.json`, "utf-8")
);

const importData = async () => {
  try {
    await userData.create(sampledata);
    console.log("Data Successfully Updated");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await userData.deleteMany();
    console.log("Data Deleted Successfully");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
