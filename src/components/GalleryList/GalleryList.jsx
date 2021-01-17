import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({
    galleryList,
    fetchGallery
}){
    return(
        <div>
            {galleryList.map((photo =>
                <>
                    <GalleryItem
                    key={photo.id}
                    photo={photo}
                    fetchGallery={fetchGallery}
                    />
                  </>
            ))}
     
        </div>
    )
}

export default GalleryList;