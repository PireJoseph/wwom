import React from 'react';

import Button from '../../Button';

import { useCmsContent } from '../../../hooks/use-cms-content';

const Action = () => {
  const { action } = useCmsContent();
  return (
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">{action.childMarkdownRemark.frontmatter.title}</h3>
      <div className="mt-8 text-xl font-light">
        <p dangerouslySetInnerHTML={{ __html: action.childMarkdownRemark.html }}></p>
      </div>
      <p className="mt-8">
        <Button size="xl">Découvrir</Button>
      </p>
    </section>
  );
};
export default Action;
