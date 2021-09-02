import React from "react";

import styles from "./ImagesGallary.module.css"

const baseURL = 'https://pixabay.com/api/';
const APIKey = '21784981-d13d311b92e9193e9bcd05db0';

const ImagesGallery = () => {

    const [images, setImages] = React.useState([])

    const getImages = async (query='cat') => {
        const url =`${baseURL}?key=${APIKey}&q=${query}&per_page=10`
        console.log({url})

        const response = await fetch(url)
        console.log({response})

        if (response.ok) {
            const result = await response.json()
            console.log({result})
            setImages(result.hits)
        }
    }

    React.useEffect(() => {
        getImages()
    })

    return(
        <>
            <h1>Images Gallery</h1>
            {images.map(image =><img src={image.previewURL}/>)}
        </>
    )
}

export default ImagesGallery