import React, { useState } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState('');
  //console.log(value);

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
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

          <input style={{ display: "none" }} type="file" id='file' />
          <label className='file' htmlFor="file">Upload image</label>

          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>

          <div className="cat">
            <input type="radio" name='art' value="art" id='art' />
            <label htmlFor="art">ART</label>
          </div>

          <div className="cat">
            <input type="radio" name='science' value="science" id='science' />
            <label htmlFor="science">SCIENCE</label>
          </div>

          <div className="cat">
            <input type="radio" name='technology' value="technology" id='technology' />
            <label htmlFor="technology">TECHNOLOGY</label>
          </div>

          <div className="cat">
            <input type="radio" name='cinema' value="cinema" id='cinema' />
            <label htmlFor="cinema">CINEMA</label>
          </div>

          <div className="cat">
            <input type="radio" name='design' value="design" id='design' />
            <label htmlFor="design">DESIGN</label>
          </div>

          <div className="cat">
            <input type="radio" name='food' value="food" id='food' />
            <label htmlFor="food">FOOD</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write