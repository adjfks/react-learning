import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const name = 'Joke'
const title = (
  <h1 style={{ color: 'skyblue', backgroundColor: 'pink' }} className="title">
    {name}
  </h1>
)

const isLoding = false
const getContent = () => {
  return isLoding ? <div>loading</div> : <div>loaded</div>
}

const main = (
  <div>
    {title}
    {getContent()}
  </div>
)

const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' },
]
const list = (
  <ul>
    {songs.map((item) => (
      <li id={item.id}>{item.name}</li>
    ))}
  </ul>
)

ReactDOM.render(title, document.getElementById('root'))
