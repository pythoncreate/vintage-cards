const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  username: { type: String, minlength: 5, unique: true, required: true },
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: String,
  favorites: Array
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  }
});

userSchema.plugin(uniqueValidator, {
  message: "Sorry, that {PATH} is already in use."
});

const User = mongoose.model("User", userSchema);

module.exports = User;
