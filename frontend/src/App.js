import React, { useState } from 'react'


const App = () => {

  const [text, setText] = useState('333')
  const [board, setBoard] = useState([])

  const enrollPost = () => {  
    setBoard([...board, text])
  }

  const resetPost = () => {  
    setBoard([])
  }

  return (
    <div className="App">
      <h1>todo list</h1>
      <input onChange={(e) => {setText(e.target.value)}} type="text" value={text}></input>
      <button onClick={enrollPost}>등록</button>
      <button onClick={resetPost}>초기화</button>
      {
        board.map((item, idx) => {
          return (
            <div>
              {item}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
