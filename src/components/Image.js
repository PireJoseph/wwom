import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ className = '', image, title }) => {
  const Img = styled.img``;

  const imageExtension = image.publicURL.split('.').pop();
  const supportedExtensions = ['jpg', 'jpeg', 'png'];
  let imagetodisplay = (
    <Img
      className={`${className}`}
      src={image.publicURL}
      loading="eager"
      alt={title}
      title={title}
    />
  );

  if (supportedExtensions.includes(imageExtension)) {
    const imageData = getImage(image);
    imagetodisplay = (
      <>
        <GatsbyImage className={`${className}`} image={imageData} alt={title} />
      </>
    );
  }

  return imagetodisplay;
};

export default Image;
