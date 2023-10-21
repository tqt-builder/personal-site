import React from 'react';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';
import blogs from '../data/blogs';

const Blog = () => (
  <Main
    title="Blogs"
    description="All my writings"
  >
    <article className="post" id="projects">
      {blogs.map((project) => (
        <Cell data={project} key={project.title} />))}
    </article>
  </Main>
);

export default Blog;
