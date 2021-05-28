import React from 'react';

import Button from '../Button';

import { useContentAction } from '../../hooks/use-content-action';

const Action = () => {
  const { action } = useContentAction();
  return (
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">{file.childMarkdownRemark.frontmatter.title}</h3>
      <div className="mt-8 text-xl font-light">
        <p dangerouslySetInnerHTML={{ __html: file.childMarkdownRemark.html }}></p>
      </div>
      <p className="mt-8">
        <Button size="xl">Découvrir</Button>
      </p>
    </section>
  );
};
export default Action;
