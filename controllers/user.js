import { User } from "../Models/User.js";

export const userRegister = async (req, res) => {
  try {
    let user = await User.create(req.body);
    // Render success.ejs and pass user data
    res.render("success", { user });
  } catch (error) {
    res.json({ message: error.message });
  }
};
