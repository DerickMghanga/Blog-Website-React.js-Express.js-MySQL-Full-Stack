import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

const Write = () => {

  const state = useLocation().state; //from Link react-router-dom (SimglePost.jsx)
  const navigate = useNavigate();

  const [value, setValue] = useState(state?.desc || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');
  //console.log(value);

  //upload file(image)
  const upload = async () => {
    try {
      const formData = new FormData();

      formData.append("file", file);

      const res = await axios.post("/upload", formData);
      //console.log(res.data);
      return res.data;

    } catch (err) {
      console.log(err);
    }

    setFile(null);
  }

  const handleSubmit = async() => {

    const imgUrl = await upload();

    try {
      state ?   //state exists when updating an existing post
        await axios.put(`/posts/${state.id}`, {title, desc: value, cat, img: file ? imgUrl : state.img}) 
        : 
        await axios.post("/posts", {
          title,
          desc: value,
          cat,
          img: file ? imgUrl : "",
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")  //date format for mySQL
        })
      
        navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>

          <span>
            <b>Status:</b> Draft
          </span>

          <span>
            <b>Visibility:</b> Public
          </span>

          <input style={{ display: "none" }} type="file" id='file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className='file' htmlFor="file">Upload image</label>

          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name='art' value="art" id='art' 
              checked = {cat === "art"}
              onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="art">ART</label>
          </div>

          <div className="cat">
            <input type="radio" name='science' value="science" id='science' 
              checked = {cat === "science"} 
              onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="science">SCIENCE</label>
          </div>

          <div className="cat">
            <input type="radio" name='technology' value="technology" id='technology' 
              checked = {cat === "technology"} 
              onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="technology">TECHNOLOGY</label>
          </div>

          <div className="cat">
            <input type="radio" name='cinema' value="cinema" id='cinema' 
              checked = {cat === "cinema"} 
              onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="cinema">CINEMA</label>
          </div>

          <div className="cat">
            <input type="radio" name='design' value="design" id='design'  
              checked = {cat === "design"}
              onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="design">DESIGN</label>
          </div>

          <div className="cat">
            <input type="radio" name='food' value="food" id='food' 
              checked = {cat === "food"} 
              onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="food">FOOD</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write