import { useState } from 'react';
import TextInput from './components/TextInput/TextInput';

function App() {
  const [text, setText] = useState('');

  const characterCount = text.length;

  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const wordCount = text.trim() === '' ? 0 : words.length;

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <main>
      <h1>Character Counter</h1>

      <TextInput onTextChange={handleTextChange} />

      <p>You typed:</p>
      <p>{text}</p>

      <h2>Stats</h2>
      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
    </main>
  );
}

export default App;