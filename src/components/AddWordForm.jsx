import { useState } from 'react'

export default function AppWordForm({ words, addWord }) {
  let [danishWord, setDanishWord] = useState('');
  let [englishWord, setEnglishWord] = useState('');
  
  
  function appendWord() {
    if (!danishWord.trim() || !englishWord.trim()) {
      return false;
    }
    const newWord = { id: words[words.length - 1 ].id + 1, danish: danishWord, english: englishWord }; const newWords = [...words, newWord];
    addWord(newWords);
    return true;
  }

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
  )
  
}