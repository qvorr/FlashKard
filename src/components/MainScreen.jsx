import { useState } from 'react'
import './MainScreen.css'
import './MenuBars.jsx'
// import VocabList from './VocabList.jsx';
// import AddWordForm from './AddWordForm.jsx';
import DisplayWords from './DisplayWords.jsx'
import AddWordForm from './AddWordForm.jsx'
import { useEffect } from 'react'

export default function WordScreen(){
  // let [count, incr] = useState(0);
    
  
  let [words, setWord] = useState([]);

  async function getRealWords() {
    const result =  await window.iMadeAPI.getWords();
    console.log("this shi from mainScreen")
    console.log(result);
    return result;
  }
  
  let [wordWindow, showWordWindow] = useState(false);

  useEffect(() => {
    async function getWords() {
      const result = await window.iMadeAPI.getWords();
      setWord(result);
    }

    getWords();
  }, []);

  

  return (
    <div>
      <div className="bar-layout search-wrapper">
        <div className="search-bar">
          search
        </div>
        <div className="add-card btn" onClick={() => showWordWindow(!wordWindow)}>+ add card</div>
        {wordWindow && (<AddWordForm words={words} addWord={setWord}/>)}
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
