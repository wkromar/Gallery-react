import axios from 'axios'
import {useState} from 'react'



function GalleryItem({
fetchGallery,
photo
}){
    const [isImageFlipped, setIsImageFlipped] = useState(false)
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
        
        <div key={photo.id}>
        {isImageFlipped ?
        <>
        <img src={photo.path} onClick={() =>flipImage(photo.id)}></img>
        <p><button onClick={() =>addLikes(photo.id)}>Liked</button>Likes:{photo.likes}</p>
        </>:<>
        <p onClick={() =>flipImage(photo.id)}>{photo.description}</p>
        <p><button onClick={() =>addLikes(photo.id)}>Liked</button>Likes:{photo.likes}</p>
        </>}
        </div>
        
    )
};
export default GalleryItem