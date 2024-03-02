const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true,},
  password: { type: String, require: true },
  role: { type: String, require: true },
  status: { type: String, require: true },
  phone: { type: Number, require: true },
}
);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
