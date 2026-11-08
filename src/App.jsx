// import { useState } from 'react'
import './App.css'
// import { Greeting, Farewell } from './components/Greeting.jsx'
import { TopBar, BottomBar, SelectorBar} from './components/MenuBars.jsx';
import WordScreen from './components/MainScreen.jsx';

function App() {

  return (
    <main className='set-background'>
      <div className='menu'>
        <TopBar />
        <SelectorBar />
        <WordScreen />
        <BottomBar />
      </div>
    </main>
  )
}

export default App