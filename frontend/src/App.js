import React, { useState } from 'react'


const App = () => {

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState(0)
  const [text, setText] = useState('333')
  const [board, setBoard] = useState([])

  const enrollPost = () => {  
    setBoard([...board, text])
  }

  const resetPost = () => {  
    setBoard([])
  }

  const getUserData = () => {
    // ajax
    fetch('/getUser')
    .then(res => res.json())
    .then(data => {
      setUserName(data.username)
      setUserAge(data.age)
      setBoard(data.content)
    });
  }

  return (
    <div className="App">
      <h1>todo list</h1>
      <h5>{userName}</h5>
      <h5>{userAge}</h5>
      <input onChange={(e) => {setText(e.target.value)}} type="text" value={text}></input>
      <button onClick={enrollPost}>등록</button>
      <button onClick={resetPost}>초기화</button>
      <button onClick={getUserData}>비동기통신</button>
  
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
