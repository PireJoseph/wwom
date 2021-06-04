import React from 'react';

import Button from '../../Button';
import DiscoverLink from '../../DiscoverLink';

import { useCmsContent } from '../../../hooks/use-cms-content';

const Action = () => {
  const { action } = useCmsContent();
  return (
    <section className="py-24 bg-gray-200 rounded-lg text-center text-primary-darker mx-2">
      <h3 className="text-2xl lg:text-4xl font-semibold">
        {action.childMarkdownRemark.frontmatter.title}
      </h3>
      <div className="mt-8 px-4 text-lg font-light text-gray-800">
        <p dangerouslySetInnerHTML={{ __html: action.childMarkdownRemark.html }}></p>
      </div>
      <p className="mt-8">
        <DiscoverLink size="lg" />
      </p>
    </section>
  );
};
export default Action;
