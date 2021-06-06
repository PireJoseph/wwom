import React from 'react';

import { css } from '@emotion/react';

const heroBg = css`
  background: linear-gradient(180deg, rgba(129, 244, 225, 0.5) 0%, rgba(129, 244, 225, 0) 100%);
`;

const Hero = ({ title, image, action, link, ...props }) => {
  return (
    <div css={heroBg} className={props.className + ' mt-16 lg:mt-2 mb-2 '}>
      <div className="flex flex-col justify-center lg:flex-row items-center  pt-20 md:pt-40 container mx-auto">
        <div className="text-center lg:text-left lg:w-1/2 lg:pl-16 xl:pl-32">
          <h1
            className="text-3xl leading-none font-bold text-primary-lighter"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          {!!action && (
            <p
              className="text-xl lg:text-2xl mt-6 font-light"
              dangerouslySetInnerHTML={{ __html: action }}
            ></p>
          )}
          {!!link && <div className="mt-12">{link}</div>}
        </div>
        <div className="ml-auto pt-20 lg:pt-0 w-4/5 mx-auto lg:w-1/3">{image}</div>
      </div>
    </div>
  );
};
export default Hero;
