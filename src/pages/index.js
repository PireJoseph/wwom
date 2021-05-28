import React from 'react';

import Layout from '../components/layout/Layout';

import Hero from '../components/home/Hero';
import Presentation from '../components/home/Presentation';
import Services from '../components/home/Services';
import Testimonial from '../components/home/Testimonial';
import Press from '../components/home/Press';
import Action from '../components/home/Action';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <Hero />
    </section>

    <section id="presentation" className="py-20 lg:pb-40 lg:pt-48">
      <Presentation />
    </section>

    <section id="services">
      <Services />
    </section>
    <section id="testimonial" className="py-20 lg:pt-32">
      <Testimonial />
    </section>

    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <Action />
    </section>

    <section id="press" className="py-20 lg:py-40">
      <Press />
    </section>
  </Layout>
);

export default Index;
