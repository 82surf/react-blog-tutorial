import {useState} from 'react';
import './App.css';
import Modal from './components/Modal'

function App() {

  let [titles, updateTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학'])

  let [likes, incrementLikes] = useState(0);

  function changeTitle() {
    const tmpTitles = titles.slice();
    tmpTitles[0] = '여자 코트 추천'
    updateTitle(tmpTitles);
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <div className="black-nav">
        <div>My-blog</div>
      </div>
      <button onClick={ changeTitle }>Chage Title</button>
      {/* LIST */}
      <div className="list">
        <h3>
          { titles[0] }
          <span onClick={ () => { incrementLikes(++likes) } }>👍</span>
          { likes }
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ titles[1] }</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{ titles[2] }</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

export default App;
