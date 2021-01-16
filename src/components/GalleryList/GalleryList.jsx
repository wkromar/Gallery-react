import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    galleryList
}){
    return(
        <div>
            {galleryList.map((photo =>
                <>
                    <GalleryItem
                    key={photo.id}
                    photo={photo}/>
                  </>
            ))}
     
        </div>
    )
}

export default GalleryList;