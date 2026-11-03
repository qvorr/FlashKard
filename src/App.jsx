import { useState } from 'react'
import './App.css'
// import { Greeting, Farewell } from './components/Greeting.jsx'
import VocabList from './components/VocabList.jsx';

function App() {
  let [count, incr] = useState(0);
  let [words, addWord] = useState([
    {id: 1, danish: "kat", english: "cat"},
    {id: 2, danish: "hund", english: "dog"},
    {id: 3, danish: "mor", english: "mother"},
    {id: 4, danish: "far", english: "father"}
  ])
  
  function inc() {
    incr(count+1)
  }

  function appendWord() {
    if (danishWord != "" && englishWord != "") {
      const newWord = { id: words[words.length - 1 ].id + 1, danish: danishWord, english: englishWord }; const newWords = [...words, newWord];
      addWord(newWords);
      return true;
    } else {
      return false;
    }
    
  }

  let [danishWord, setDanishWord] = useState('');
  let [englishWord, setEnglishWord] = useState('');
  
  function setWord(word, isDanish) {
    switch (isDanish) {
      case true: setDanishWord(word);
        break;
      case false:setEnglishWord(word) ;
        break;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (appendWord() == true) {
      setDanishWord('');
      setEnglishWord('');
      
    }
    
  }
  
  
  return (
    <main>
      <h1>FlashCard.</h1>
      <p>i make</p>
      <div>
        <button onClick={inc}>Increment</button>
        <p>{count}</p>
        <p>Add word</p>
        
        <form onSubmit={handleSubmit}>
          <input onChange={event => setWord(event.target.value, true)}
            value={danishWord}
            type='text'
            id='danishWord'
            placeholder='Danish'></input>
          
          <input onChange={event => setWord(event.target.value, false)}
            value={englishWord}
            type='text'
            id='englishWord'
            placeholder='English'></input>
          <br />
          <button type="submit">Add</button>
        </form>
        
        <VocabList words={words} />
      </div>
    </main>
  )
}

export default App