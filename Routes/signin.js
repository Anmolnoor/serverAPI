import bcrypt from "bcrypt";

import User from "../Models/user.js";

const Signin = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ email });

    console.log({ userBeforeCompare: existingUser });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist." });

    console.log({ passFromUser: password, passFromDB: existingUser.password });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials." });

    res.status(200).json({ result: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

export default Signin;
