import { db } from "../config/dbConnect.js";

//get all posts
export const getPosts = (req, res) => {

    const { cat } = req.query; //if category is selected

    //if a category is selected fetch by categories
    const q = cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";

    db.query(q, [cat], (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    })
}

//get one specific post
export const getPost = (req, res) => {

    const { id } = req.params;

    const q = "SELECT `username`, `title`, `desc`, p.img , u.img AS userImg, `cat`, `date` FROM users as u JOIN posts as p ON u.id = p.uid WHERE p.id = ?";

    db.query(q, [req.params.id], (err, data) => {

        if (err) return res.send(err);

        //console.log(data[0]);

        return res.status(200).json(data[0]);  //"db.query" returns an array
    })
}

//add a new post
export const addPost = (req, res) => {
    return res.json("from controller")
}

//delete a single post
export const deletePost = (req, res) => {
    return res.json("from controller")
}

//update one post
export const updatePost = (req, res) => {
    return res.json("from controller")
}