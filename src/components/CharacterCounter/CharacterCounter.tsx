import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { CharacterCounterProps } from '../../types/index';

function CharacterCounter({
  minWords = 25,
  maxWords = 100,
}: CharacterCounterProps) {
  const [text, setText] = useState('');

  const characterCount = text.length;

  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const wordCount = text.trim() === '' ? 0 : words.length;

  const wordsPerMinute = 200;
  const readingTime = wordCount / wordsPerMinute;

  const stats = {
    characterCount,
    wordCount,
    readingTime,
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  const progressPercent = Math.min((wordCount / maxWords) * 100, 100);
  return (
  <section>
    <h1>Character Counter</h1>
    <p>Type your content below to see your writing stats.</p>

    <TextInput onTextChange={handleTextChange} />

    <StatsDisplay stats={stats} />

    <div>
      <p>
        Word Goal: {wordCount} / {maxWords}
      </p>
        <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${progressPercent}%` }}
    ></div>
    </div>
      {wordCount < minWords && (
  <p className="warning">
    Keep writing. Minimum goal is {minWords} words.
  </p>
)}

{wordCount >= minWords && wordCount <= maxWords && (
  <p className="success">
    Good job. You are within the word goal.
  </p>
)}

{wordCount > maxWords && (
  <p className="error">
    You went over the maximum word count.
  </p>
)}
    </div>
  </section>
);
}

export default CharacterCounter;
