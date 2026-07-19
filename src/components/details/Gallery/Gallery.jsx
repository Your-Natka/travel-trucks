import { useState } from 'react';

import css from './Gallery.module.css';

const Gallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0].original);

  return (
    <div className={css.gallery}>
      <img src={activeImage} alt="Camper" className={css.mainImage} />

      <div className={css.previewRow}>
        {images.map(image => (
          <img
            key={image.original}
            src={image.thumb}
            alt="Camper"
            className={css.preview}
            onClick={() => setActiveImage(image.original)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
