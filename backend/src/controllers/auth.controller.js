import User from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// signup 
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });
    res.status(201).json({ message: "user created successfully", user });
  } catch (error) {
    console.log("error in signup controller : ", error.message);
    res.status(500).json({ message: "Internal server error !" });
  }
};


// login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Invalid credentials ! " });
    }
    const hashPassword = user.password;
    const isMatch = await bcrypt.compare(password, hashPassword);
    if (!isMatch && !res.headersSent) {
      res.status(404).json({ message: "Invalid credentials ! " });
    } else {
      const token = await jwt.sign(
        { userId: user._id },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );
      res.cookie("auth_token", token, { maxAge: 7 * 24 * 60 * 60 * 1000 });
      res.status(200).json({ message: "User logged in successfully !", token });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error ! " });
  }
};


// profile
export const profile = async (req, res) => {
  try {
    let _id = req.user.userId;
    let user = await User.findOne({ _id });
    console.log(user);
    
    const { name, email } = user;

    const img = user?.img || null
    
    
    res.status(200).json({
      message: `Hi ${name.split(" ")[0]}, welcome to profile `,
      name,
      email,
      _id, 
      img
    });
  } catch (error) {
    console.log("error in profile controller : ", error.message);
    res.status(500).json("Internal server error ");
  }
};


// logout
export const logout = async (req, res) => {
  try {
    const token = req.cookies.auth_token;
    if (token) {
      res.cookie("auth_token", "", { maxAge: 0 });
      res.status(200).json({ message: "You are now, logged out !" });
    } else {
      res.status(200).json({ message: "already logged out " });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error ! " });
  }
};



export const uploadImg = async (req, res) =>{
  try {
    let {_id} = req.params;
    console.log(req.files);
    
    let {img} =  req.files
    img.mv(`src/uploads/profiles/${img.name}`, async(err)=>{
      if(err){
          res.status(400).json({message:"Problem in file moves !", err})
      }
    })

   let user =  await User.findByIdAndUpdate({_id}, {img : img.name}, {new:true})
   res.status(201).json({message:"Profile image uploaded successfully ! ", img: img.name, user})
  } catch (error) {
    console.log("Error in uploadImg controller : ", error.message);
    res.status(500).json({message:"Internal server error ! "})
    
  }
}