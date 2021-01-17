import axios from 'axios'
import {useState} from 'react'



function GalleryItem({
fetchGallery,
photo
}){
    const [isImageFlipped, setIsImageFlipped] = useState(true)
    const addLikes =(id) =>{
        axios.put(`/gallery/like/${id}`)
        .then(response =>{

            fetchGallery();
        }).catch(error =>{
            alert('error updating put')
        })
    };

    const flipImage=() =>{

        setIsImageFlipped(!isImageFlipped)

    };


    return(
        
        <div className="container" key={photo.id}>
        {isImageFlipped ?
        <>
        <img src={photo.path} onClick={() =>flipImage(photo.id)}></img>
        <p className= "likeBar"><button onClick={() =>addLikes(photo.id)}><span>Like</span></button>Likes:{photo.likes}</p>
        </>:<>
        <p className= "desc likeBar"onClick={() =>flipImage(photo.id)}>{photo.description}</p>
        <p className= "likeBar"><button onClick={() =>addLikes(photo.id)}><span>Like</span></button>Likes:{photo.likes}</p>
        </>}
        </div>
        
    )
};
export default GalleryItem