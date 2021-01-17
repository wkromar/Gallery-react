import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
// import galleryItems from "public/server/modules/gallery.data.js";


function App() {

    const [galleryList, setGalleryList] = useState([]);

    const fetchGallery = () => {
      axios({
      method: 'GET',
      url: '/gallery'
      }).then((response) => {
        console.log("sending Gallery to App.jsx", response);
        setGalleryList(response.data)
      }).catch(function (error) {
        console.log('Error on get:', error);
      });
    }

    // Call function so it runs once on component load
    // Similar to jQuery's document ready
    useEffect( () => {
    fetchGallery();
  }, [])


    console.log(galleryList);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <div>
        
        <GalleryList galleryList={galleryList}
          fetchGallery={fetchGallery}
        />
        </div>
      </div>
    );
}

export default App;
