import '../App.css';
import './MenuBars.css';

function TopBar() {
  return (
    <div className='layoutSideBar'>
      <h2 className="title">FlashKard</h2>
      <div id="card" className="item">card</div>
      <div id="stats" className="item">stats</div>
      <div id="settings" className="item item-push-to-other-side">settings</div>
      <div id="about" className="item">about</div>
    </div>
  )
}

function SelectorBar() {
  return (
    <div>
      
    </div>
  )
}

function BottomBar() {
  
}

export { TopBar, BottomBar, SelectorBar};