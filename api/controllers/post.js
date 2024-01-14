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
    return res.json("from controller")
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