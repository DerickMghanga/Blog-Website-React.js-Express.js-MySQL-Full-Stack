import { db } from "../config/dbConnect.js";
import bcrypt from "bcrypt";

//REGISTER USER
export const register = (req, res) => {
    const { email, username, password } = req.body;

    //check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [email, username], (err, data) => {
        if (err) return res.status(500).json(err); //if there is an error

        if (data.length > 0) return res.status(409).json({ message: "User already exists!" });

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

  const {username, password} = req.body;

  const q = "SELECT * FROM users WHERE username = ?"

  db.query(q, [username], (err, data) => {
    if (err) return res.json(err);

    //if username doesnt exist or user isn't registered
    if (data.length == 0) return res.status(404).json({message: "User not found!"})

    //check if password is correct
    const pwdCheck = bcrypt.compareSync(password, data[0].password);

    if (!pwdCheck) return res.status(401).json({message: "Incorrect password! Try again."})


    return res.json("from controller");
  })

};

//USER LOGOUT
export const logout = (req, res) => {
  return res.json("from controller");
};
