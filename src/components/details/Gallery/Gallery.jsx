import { useState } from 'react';

import css from './Gallery.module.css';

const Gallery = ({ images, name }) => {
  const [activeImage, setActiveImage] = useState(images[0].original);

  return (
    <div className={css.gallery}>
      <img src={activeImage} alt={name} className={css.mainImage} />

      <div className={css.previewRow}>
        {images.map(image => (
          <img
            loading="lazy"
            key={image.original}
            src={image.thumb}
            alt={`Photo of ${name}`}
            className={css.preview}
            onClick={() => setActiveImage(image.original)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
