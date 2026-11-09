import { useState } from 'react'
import './MainScreen.css'
import './MenuBars.jsx'
// import VocabList from './VocabList.jsx';
// import AddWordForm from './AddWordForm.jsx';
import DisplayWords from './DisplayWords.jsx'
import AddWordForm from './AddWordForm.jsx'

export default function WordScreen(){
  // let [count, incr] = useState(0);
    
  
  let [words, addWord] = useState([
    {id: 1, gender:"en", danish: "kat", english: "cat", difficulty:1},
    {id: 2, gender:"et", danish: "hund", english: "dog", difficulty:1},
    {id: 3, gender:"et", danish: "mor", english: "mother", difficulty:2},
    {id: 4, gender:"et", danish: "far", english: "father", difficulty:4},
    {id: 5, gender:"en", danish: "søster", english: "sister", difficulty:4},
  ])

  let [wordWindow, showWordWindow] = useState(false);

  return (
    <div>
      <div className="bar-layout search-wrapper">
        <div className="search-bar">
          search
        </div>
        <div className="add-card btn" onClick={() => showWordWindow(!wordWindow)}>+ add card</div>
        {wordWindow && (<AddWordForm words={words} addWord={addWord}/>)}
      </div>  
      <DisplayWords words={words}/>
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
