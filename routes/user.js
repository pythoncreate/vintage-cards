const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
const User = require("../models/user");
const mongoose = require("mongoose");

userRouter.post("/", async (request, response, next) => {
  const { username, password, firstName, lastName, email } = request.body;

  if (!username || username.length < 5) {
    return response
      .status(400)
      .json({ error: "Please enter a username of 5 characters or greater" });
  }

  if (!password || password.length < 5) {
    return response
      .status(400)
      .json({ error: "Please enter a password of 5 characters or greater" });
  }

  try {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username: username,
      firstName: firstName,
      lastName: lastName,
      passwordHash,
      email: email,
      favorites: null
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (exception) {
    next(exception);
  }
});

userRouter.get("/", async (request, response) => {
  const user = await User.find({});
  response.json(user);
});

userRouter.get("/:id/favorites", async (request, response) => {
  const id = request.params.id;
  console.log("ID", id);
  const user = await User.findById(id);
  response.send(user.favorites);
});

// usersRouter.get("/:id", async (request, response, next) => {
//   try {
//     const blog = await User.findById(request.params.id);
//     if (user) {
//       response.json(user.toJSON());
//     } else response.status(404).end();
//   } catch (error) {
//     next(error);
//   }
// });

//remove favorite

userRouter.put("/:id/removefav", async (request, response, next) => {
  const card = request.body;
  const userId = request.params.id;
  try {
    await User.findByIdAndUpdate(userId, {
      $pull: { favorites: { id: card.id } },
      new: true
    });
    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

userRouter.put("/:id", async (request, response, next) => {
  const card = request.body;
  try {
    await User.findByIdAndUpdate(request.params.id, {
      $push: { favorites: card },
      new: true
    });
    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
