const express = require("express");

const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../Controllers/user");
const router = express.Router();

// router.get("/user", async (req, res) => {
//   const allDbUser = await User.find({});
//   const html = `
//        <ul>
//           ${allDbUser
//             .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
//             .join("")}
//        </ul>
//       `;
//   res.send(html);
// });

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
