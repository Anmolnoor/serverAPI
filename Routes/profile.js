import User from "../Models/user.js";
const Profile = async (req, res) => {
  const email = localStorage.getItem("email");
  console.log({ email: email });
  try {
    const existingUser = await User.findOne({ email: email });
    console.log(existingUser);
    res.status(200).json({ result: existingUser });
  } catch (error) {
    console.log(error);
  }
};

export default Profile;
