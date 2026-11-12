import { useState } from 'react'
import './AddWordForm.css'

export default function AppWordForm({ words, setWord }) {
  let [danishWord, setDanishWord] = useState('');
  let [englishWord, setEnglishWord] = useState('');
  
  
  function selectGender(word) {
    const splitWord = word.split(" ");
    console.log(splitWord)
    if (splitWord.length < 2) {
      return [" ", word];
    }
    switch (splitWord[0]) {
      case "en": return ["en", word.substring(3)];
      case "et": return ["et", word.substring(3)];
      default: return [" ", word];
    }
  }
  
  
  function handleSubmit(event) {
    event.preventDefault();
    if (!danishWord.trim() || !englishWord.trim()) {
      return;
    }
    const genderPlusWord = selectGender(danishWord)
    const gender = genderPlusWord[0];
    const dk = genderPlusWord[1];
    const eng = englishWord;

    window.iMadeAPI.appendWord(gender, dk, eng)
    
    
    const newWord = {
      id: words[words.length - 1].id + 1,
      gender: gender,
      danish: dk,
      english: eng,
      difficulty: 1
    };
    const newWords = [...words, newWord];
    setWord(newWords);
    setDanishWord('');
    setEnglishWord('');
  }
  
  
  
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add</button>
    </form>
    
  )
  
}