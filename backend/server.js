require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserSchema = require("./models/users");
const jwt = require("jsonwebtoken");

const app = express();

const { MONGODB_URI, PORT } = process.env;

mongoose.connect(`${MONGODB_URI}`);

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    await UserSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      status: req.body.status,
      phone: req.body.phone,
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", error: "Something went wrong" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserSchema.find();
    const usersWithToken = users.map((user) => {
      const token = jwt.sign({ password: user.password }, "secret123");
      return { ...user.toObject(), password: token };
    });
    res.json({ status: "success", users: usersWithToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", error: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserSchema.findOne({ email });

  if (!user) {
    return res.json({ status: "error", message: "User not found" });
  }

  const isPasswordValid = password === user.password;

  if (!isPasswordValid) {
    return res.json({ status: "error", message: "Invalid password" });
  }

  const token = jwt.sign({ password }, "secret123");

  return res.json({
    status: "success",
    user: { ...user.toObject(), password: token },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
