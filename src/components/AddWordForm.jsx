import { useState } from 'react'
import './AddWordForm.css'

export default function AppWordForm({ words, addWord }) {
  let [danishWord, setDanishWord] = useState('');
  let [englishWord, setEnglishWord] = useState('');
  
  
  function selectGender(word) {
    const splitWord = word.split(" ");
    console.log(splitWord)
    if (splitWord.length < 2) {
      return "";
    }
    switch (splitWord[0]) {
      case "en": return ["en", word.substring(3)];
      case "et": return ["et", word.substring(3)];
      default: return "";
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (!danishWord.trim() || !englishWord.trim()) {
      return;
    }
    const genderPlusWord = selectGender(danishWord)
    
    const newWord = {
      id: words[words.length - 1].id + 1,
      gender: genderPlusWord[0],
      danish: genderPlusWord[1],
      english: englishWord,
      difficulty: 1
    };
    const newWords = [...words, newWord];
    addWord(newWords);
    setDanishWord('');
    setEnglishWord('');
  }
  
  const handleKeyDown = (event) => {
    console.log(event.key);
  };
  
  
  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div className="englishPlaceholder">english</div>
      <input onChange={event => setEnglishWord(event.target.value)}
        value={englishWord}
        type='text'
        id='englishWord'
        className='textField'
        placeholder='English'></input>
      <div className="danishPlaceholder">danish</div>
      <input onChange={event => setDanishWord(event.target.value)}
        value={danishWord}
        type='text'
        id='danishWord'
        className='textField'
        placeholder='Danish'></input>
      {/* TODO use string to select 'en/et'*/}
      <button type="submit">Add</button>
    </form>
  )
  
}