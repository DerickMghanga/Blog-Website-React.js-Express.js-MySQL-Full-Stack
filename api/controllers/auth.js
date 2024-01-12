import { db } from "../config/dbConnect.js";
import bcrypt from "bcrypt";

//REGISTER USER
export const register = (req, res) => {
    const { email, username, password } = req.body;

    //check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [email, username], (err, data) => {
        if (err) return res.status(500).json(err); //if there is an error

        if (data.length > 0) return res.json({ message: "User already exists!" });

        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        //create user account
        const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";

        const values = [
            username, 
            email,
            hashedPassword
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err); //if there is an error

            return res.status(200).json({message: "User has been created!"})
        })
    });
};

//USER LOGIN
export const login = (req, res) => {
  return res.json("from controller");
};

//USER LOGOUT
export const logout = (req, res) => {
  return res.json("from controller");
};
