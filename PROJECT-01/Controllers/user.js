const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUser = await User.find();
  return res.json(allDbUser);
}

async function handleGetUserById(req, res) {
  const userById = await User.findById(req.params.id);
  if (!userById) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  return res.json(userById);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  return res.json({ status: "Success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateUser(req, res) {
  const body = req.body;

  if (!body || !body.first_name || !body.email) {
    return res.status(400).json({
      status: "error",
      message: "Please provide first_name and email",
    });
  }

  const existingUser = await User.findOne({ email: body.email });
  if (existingUser) {
    return res
      .status(400)
      .json({ status: "error", message: "Email already exists" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name || "",
    email: body.email,
    jobTitle: body.jobTitle || "",
    gender: body.gender || "",
  });
  return res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: result,
    id: result._id,
  });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
