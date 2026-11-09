import './DisplayWords.css'
import './utilities.css'

export default function WordView({words}) {
  const items = words.map(word =>
    <div className='word-line' key={word.id}>
      <div className="status word-item">[diff:{word.difficulty}]</div>
      <div className="wordENG word-item">{word.english}</div>
      <div className="arrow"> == &gt; </div>
      <div className="gender word-item">{word.gender}</div>
      <div className="wordDK word-item">{word.danish}</div>
      <div className="edit word-item flex-align-right">edit</div>
    </div>
  )

  
  return(
    <div>
        {items}
        {/* <div className='word-line'>
          <div className="status word-item">[mastered]</div>
          <div className="wordENG word-item">house</div>
          <div className="arrow"> == &gt; </div>
          <div className="gender word-item">et</div>
          <div className="wordDK word-item">hus</div>
          <div className="edit word-item flex-align-right">edit</div>
        </div>*/}
    </div>
  )
}