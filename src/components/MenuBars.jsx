import '../App.css';
import './MenuBars.css';

function TopBar() {
  return (
    <div className='bar-layout outline'>
      <div className="item"><strong>FlashKard</strong></div>
      <div id="card" className="item">card</div>
      <div id="stats" className="item">stats</div>
      <div id="settings" className="item item-push-to-other-side">settings</div>
      <div id="about" className="item">about</div>
    </div>
  )
}

function SelectorBar() {
  return (
    <div className='bar-layout selectorBar outline'>
      <div className='item'>deck:
        {/* TODO add gap between deck: and dropdown */}
        <select name="language" id="language">
          <option value="dansih">danish</option>
          <option value="english">english</option>
          <option value="german">german</option>
        </select>
      </div>
      {/* TODO switch between flashcard and typing */}
      <div className='item'>mode: flashcard/typing</div>
      {/* TODO same type of switch here */}
      <div className='item'>view: all cards / learned / new</div>
    </div>
  )
}

function BottomBar() {

}

export { TopBar, BottomBar, SelectorBar};
