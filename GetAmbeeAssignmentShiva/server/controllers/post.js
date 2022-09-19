const express = require("express");
const userData = require("./../model/postmodel");
exports.getpost = async (req, res) => {
  try {
    const data = await userData.find();
    console.log("Got a hit");
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createUserData = async (req, res) => {
  const inputData = req.body;
  const newInputData = new userData(inputData);
  try {
    await newInputData.save();
    console.log("Got a post hit");
    res.status(201).json(newInputData);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
