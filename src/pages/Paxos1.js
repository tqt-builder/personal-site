import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Paxos1 = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/paxos1.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="Paxos"
    >
      <article className="post markdown" id="paxos1">
        <header>
          <div className="title">
            <h2>Paxos protocol</h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Paxos1;
