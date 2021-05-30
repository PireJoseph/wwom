import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ className = '', image, title, css }) => {
  if (!!image.publicURL) {
    const imageExtension = image.publicURL.split('.').pop();
    const supportedExtensions = ['jpg', 'jpeg', 'png'];

    if (supportedExtensions.includes(imageExtension)) {
      const imageData = getImage(image);
      return <GatsbyImage className={className} image={imageData} alt={title} css={css} />;
    }
  }

  return (
    <img
      className={className}
      src={image.publicURL}
      loading="eager"
      alt={title}
      css={css}
      title={title}
    />
  );
};

export default Image;
