import React from 'react';

import Card from '../../Card';

const Presentation = ({ presentation }) => (
  <div className="container mx-auto text-center">
    <h2 className="text-3xl lg:text-5xl font-semibold">
      {presentation.childMarkdownRemark.frontmatter.title}
    </h2>
    <div className="flex flex-col sm:flex-row sm:-mx-3">
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <div
            className="mb-8 mt-8 text-xl font-light leading-loose text-xl"
            dangerouslySetInnerHTML={{ __html: presentation.childMarkdownRemark.html }}
          ></div>
        </Card>
      </div>
    </div>
  </div>
);
export default Presentation;
