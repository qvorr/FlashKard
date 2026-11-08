import { useState } from 'react'
import './MainScreen.css'
import './MenuBars.jsx'
import VocabList from './VocabList.jsx';
import AddWordForm from './AddWordForm.jsx';
import WordView from './WordView.jsx'

export default function WordScreen(){
  let [count, incr] = useState(0);
  
    
  
  let [words, addWord] = useState([
    {id: 1, danish: "kat", english: "cat"},
    {id: 2, danish: "hund", english: "dog"},
    {id: 3, danish: "mor", english: "mother"},
    {id: 4, danish: "far", english: "father"}
  ])
  return (
    <div>
      <div className="bar-layout search-top-wrapper">
        <div className="search-bar">
          search
        </div>
        <div className="add-card btn">+ add card</div>
      </div>  
      <WordView />
    </div>
  )
  // return (
  //   <div>
  //     <button onClick={() => incr(count+1)}>Increment</button>
  //     <p>{count}</p>
  //     <p>Add word</p>
  //       
  //     <AddWordForm words={words} addWord={addWord} />
  //     <VocabList words={words} />
  //   </div>
  // )
}
