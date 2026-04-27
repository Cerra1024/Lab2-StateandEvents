import './App.css';
import CharacterCounter from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <main>
      <CharacterCounter minWords={25} maxWords={100} />
    </main>
  );
}

export default App;