// import { useState } from 'react'
import './App.css'
import './components/utilities.css'
// import { Greeting, Farewell } from './components/Greeting.jsx'
import { TitleBar, ToolkitBar, BottomBar} from './components/MenuBars.jsx';
import WordScreen from './components/MainScreen.jsx';

function App() {

  return (
    <main className='set-background'>
      <div className='menu'>
        <TitleBar />
        <ToolkitBar />
        <WordScreen />
        <BottomBar />
      </div>
    </main>
  )
}

export default App