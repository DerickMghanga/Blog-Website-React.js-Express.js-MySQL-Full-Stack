import { db } from "../config/dbConnect.js";
import jwt from "jsonwebtoken";

//get all posts
export const getPosts = (req, res) => {

    const { cat } = req.query; //if category is selected

    //if a category is selected fetch by categories
    const q = cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";

    db.query(q, [cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}

//get one specific post
export const getPost = (req, res) => {

    const { id } = req.params;

    const q = "SELECT p.id, `username`, `title`, `desc`, p.img , u.img AS userImg, `cat`, `date` FROM users as u JOIN posts as p ON u.id = p.uid WHERE p.id = ?";

    db.query(q, [id], (err, data) => {

        if (err) return res.status(500).send(err);

        //console.log(data[0]);

        return res.status(200).json(data[0]);  //"db.query" returns an array
    })
}

//add a new post
export const addPost = (req, res) => {

    const {title, desc, cat, img, date} = req.body;

    const token = req.cookies.access_token;

    if (!token) return res.status(401).json({message: "Not Authencticated"});

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json({message: 'Token is not valid!'});

        const q = "INSERT INTO posts (`title`, `desc`, `cat`, `img`, `date`, `uid`) VALUES (?)";

        const values = [
            title,
            desc,
            cat,
            img,
            date,
            userInfo.id
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json({message: "New Post has been created!"})
        })
    })
}

//delete a single post
export const deletePost = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json({message: "Not Authencticated"});

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json({message: 'Token is not valid!'});

        const postId = req.params.id;

        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

        db.query(q, [postId, userInfo.id], (err, data) => {
            if (err) res.status(403).json({message: "You can ONLY delete your post!"});

            return res.json({message: "Post has been deleted!"});
        })
    })
}

//update one post
export const updatePost = (req, res) => {
    const {title, desc, cat, img} = req.body;

    const token = req.cookies.access_token;

    if (!token) return res.status(401).json({message: "Not Authencticated"});

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json({message: 'Token is not valid!'});

        const postId = req.params.id;

        const q = "UPDATE posts SET `title`= ?, `desc`=?, `cat`=?, `img`=? WHERE `id` =? AND uid = ?";

        db.query(q, [title, desc, cat, img, postId, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json({message: "New Post has been Updated!"});
        })
    })
}