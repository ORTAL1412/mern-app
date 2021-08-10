const mongoose = require("mongoose");
const User = require("../models/userModels");
// const { model } = require("mongoose");

const getAllUsers = async (req, res) => {

  try {
    await User.find({}, (error, result) => {
      if (error) throw e.message;
      res.json({ massage: "success ! ", data: result });
    });
  } catch (error) {
    res.json({ massage: "database problem!", error: error });
  }
};

const creatNewUser = async (req, res) => {
  try {
    await User.insertMany(req.body.user, (error, result) => {
      if (error) throw e.message;
      res.json({ massage: "success ! ", data: req.body.user });
    });
  } catch (error) {
    res.json({ massage: "database problem!", err: error });
  }
};

const getUserByID = async (req, res) => {
  try {
    await User.findById(
      { _id: mongoose.ObjectId(`${req.body}`) },
      (err, result) => {
        if (err) throw err;
        res.json({ massage: "update One success!", status: data + "ok" });
      }
    );
  } catch (error) {
    res.json({ massage: "database problem!", error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.body.user._id,
      req.body.user,
      (err, result) => {
        if (err) throw err;
        res.json({ massage: "update One success!", status: result + "ok" });
      }
    );
  } catch (error) {
    res.json({ massage: "database problem!", error: error });
  }
};

const deleteUserByID = async (req, res) => {
  try {
    await User.findByIdAndDelete(
      req.body.user._id,
      (err, result) => {
        if (err) throw err;
        res.json({ massage: "Delete success!", status: data + "ok" });
      }
    );
  } catch (error) {
    res.json({ massage: "database problem!", error: error });
  }
};
module.exports =
 {
     getAllUsers,
     creatNewUser,
     getUserByID,
     updateUser,
     deleteUserByID
 };