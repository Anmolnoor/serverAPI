import bcrypt from "bcrypt";

import User from "../Models/user.js";

export const Signup = async (req, res) => {
  const {
    email,
    password,
    repassword,
    firstName,
    lastName,
    phonenumber,
    interests,
  } = req.body;

  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist!!!" });

    if (password !== repassword)
      return res.status(400).json({ message: "Passwords don't match!!!" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      phonenumber,
      interests,
    });

    console.log(result);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

export default Signup;
