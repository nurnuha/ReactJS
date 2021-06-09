//import React, {Component} from 'react'
import React, {useState} from 'react'
import '../../App.css'
//import ImageUploader from 'react-images-upload';
//import { render } from 'react-dom';
import { styleClass } from "../../utils/style_class";
//import axios from 'axios';

export default function Dashboard({profile}) {
/*
  state = {
    profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
*/

const [url, setImageURL] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');

  //render() {
    //const {profileImg} = this.state

const imageHandler = e => {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      //this.setState({setImageURL: reader.result})
      setImageURL(reader.result)
    }
  }
  reader.readAsDataURL(e.target.files[0])
}

    return (
      //<div className = "page">
      <div className = {styleClass.styleButton}>
          <h1 className = "heading">Add your image</h1>
          <div className = "img-holder">
            <img src = {url} alt = "" id = "img" className = "img" />
          </div>
            <input type = "file" name = "image-upload" id = "input" accept = "image/*" onChange = {imageHandler}/>
            <div className = "label">
              <label htmlFor = "input" className = "image-upload">
                <i className = "material-icons">add_photo_alternate</i>
                Choose your photo
              </label>
            </div>
      </div>
    )
  //}
}