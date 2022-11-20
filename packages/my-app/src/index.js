import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Joke'
const title = <h1>{name}</h1>

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
ReactDOM.render(main, document.getElementById('root'))
