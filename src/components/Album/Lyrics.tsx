import React from 'react';
// import {Tracks} from './Tracks'
import Text from './Meshakech_Keevim_lyrics';
import Extra from './Meshakech_Keevim_extra';

const linesToParagraphs = (lines: string[]): string[][] => {
  const parapgraphs = [];

  let currentParagraph = [];
  lines.forEach((line) => {
    if (line !== '') {
      currentParagraph.push(line);
    } else {
      parapgraphs.push(currentParagraph);
      currentParagraph = [];
    }
  });

  if (currentParagraph.length) {
    parapgraphs.push(currentParagraph);
  }

  return parapgraphs;
};

const stringToElements = (value: string) => (
  <>
    {linesToParagraphs(value.split('\n')).map((paragraph) => (
      <p>
        {paragraph.map((line) => (
          <span className="line">{line}</span>
        ))}
      </p>
    ))}
  </>
);

const Lyrics = () => (
  <article className="lyrics">
    <section>{stringToElements(Extra)}</section>
    <hr />
    <section>{stringToElements(Text)}</section>
  </article>
);

export default Lyrics;
