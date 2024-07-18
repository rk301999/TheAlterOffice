import { User } from "../models/authModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const body = req.body;
  const existingUser = await User.findOne({
    email: body.email,
  });
  if (existingUser) {
    res.status(411).json({ message: "Email already taken / Incorrect inputs" });
  }
  //passowrd hashing
  const hashpassword = await bcrypt.hash(body.password, 10);

  //create new user
  try {
    const user = await User.create({
      email: body.email,
      name: body.name,
      phone: body.phone,
      password: hashpassword,
    });
    const id = user._id;

    const token = jwt.sign(
      {
        id: id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({
      message: "User Created Successfully",
      token: token,
    });
  } catch (error) {
    res.status(400).json("Error while signup");
  }
};

export const login = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findOne({
        email: body.email,
      });
    
      if (!user) {
        res.status(411).json({
          message: "user not found",
        });
      }
      const ispasswordCorrect = await bcrypt.compare(body.password, user.password);
    
      if (!ispasswordCorrect) {
        res.status(411).json({
          message: "Wrong password",
        });
      }
      const id = user._id;
    
      const token = jwt.sign(
        {
          id: id,
        },
        process.env.JWT_SECRET
      );
    
      res.status(200).json({
        message: "Signin Successfull",
        token: token,
      });
  } catch (error) {
    res.status(400).json("Error while signin");
  }
};

export const logout = () => {};
