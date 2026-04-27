import { useState } from 'react';
import TextInput from './components/TextInput/TextInput';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (newText: string) => {
    setText(newText);
  };

  return (
    <main>
      <h1>Character Counter</h1>

      <TextInput onTextChange={handleTextChange} />

      <p>You typed:</p>
      <p>{text}</p>
    </main>
  );
}

export default App;

