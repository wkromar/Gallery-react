import {useState} from 'react'



function GalleryItem({
photo
}){
    // const [isLiked, setIsLiked] = useState(photo.likes)

    // const addLikes =() =>{
    //     console.log('You Liked this photo.');
    //     photo.likes ++
    // }

    return(
        <div key={photo.id}>
        <img src={photo.path}></img>
        <p>{photo.description}</p>
        <p>{photo.likes}</p>
        </div>
    )
}
export default GalleryItem