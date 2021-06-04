import React from 'react';
import Image from '../Image';

const Hero = ({ title, image, action, button, ...props }) => {
  return (
    <div className={props.className + ' bg-gradient-to-b from-secondary-lighter to-white'}>
      <div className="flex flex-col justify-center lg:flex-row items-center  pt-20 md:pt-40 container mx-auto">
        <div className="text-center lg:text-left lg:w-1/2 lg:pl-16 xl:pl-32">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-primary-lighter">
            {title}
          </h1>
          {!!action && (
            <p
              className="text-xl lg:text-2xl mt-6 font-light"
              dangerouslySetInnerHTML={{ __html: action }}
            ></p>
          )}
          {!!button && <p className="mt-8 md:mt-12 ">{button}</p>}
        </div>
        <div className="pt-20 lg:pt-0 lg:w-1/2">
          <Image className="w-80 h-80 mx-auto" image={image} title={title} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
