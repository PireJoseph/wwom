import React from 'react';

import Button from '../Button';

const Action = ({ className, children }) => (
  <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
    <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
    <p className="mt-8 text-xl font-light">
      Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
    </p>
    <p className="mt-8">
      <Button size="xl">Get Started Now</Button>
    </p>
  </section>
);
export default Action;
