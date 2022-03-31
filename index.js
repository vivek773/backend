const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful...");
  })
  .catch((err) => {
    console.error(err);
  });

// schema //////////////////////////////////
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  std: {
    type: Number,
  },
});

// creating model or collection with the help of mongooose
const model = new mongoose.model("model", schema);

// inserting documents of name and address inside the model or collection with the help of mongoose.

const createDocument = async () => {
  try {
    const empName = new model({
      name: "Nitesh",
      address: "Surat",
    });
    const studentsData = new model({
      name: "rahul",
      std: 12,
    });
    const studentsData2 = new model({
      name: "sunil",
      std: 12,
      address: "vadodara",
    });
    const studentsData3 = new model({
      name: "sachin",
      std: 12,
      address: "vapi",
    });
    const studentsData4 = new model({
      name: "Nirmal",
      std: 12,
    });

    const result = await model.insertMany([
      empName,
      studentsData,
      studentsData2,
      studentsData3,
      studentsData4,
    ]);
  } catch (error) {
    console.error(error);
  }
};

// createDocument();

const getDocument = async () => {
  try {
    const result = await model.find();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
getDocument()