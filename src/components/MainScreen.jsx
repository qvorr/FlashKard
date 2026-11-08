import { useState } from 'react'
import VocabList from './VocabList.jsx';
import AddWordForm from './AddWordForm.jsx';

export default function MainScreen(){
  let [count, incr] = useState(0);
  
    
  
  let [words, addWord] = useState([
    {id: 1, danish: "kat", english: "cat"},
    {id: 2, danish: "hund", english: "dog"},
    {id: 3, danish: "mor", english: "mother"},
    {id: 4, danish: "far", english: "father"}
  ])
  return (
    <div>
      <button onClick={() => incr(count+1)}>Increment</button>
      <p>{count}</p>
      <p>Add word</p>
        
      <AddWordForm words={words} addWord={addWord} />
      <VocabList words={words} />
    </div>
  )
}
