import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifts';

import {GifItem} from './GifItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages)  
    }

    useEffect( () => {
        getImages();
    }, [])


  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
            {
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        title={image.title}
                        url={image.url}    
                        />
                ))
            }
        </div>
    </>
  )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

