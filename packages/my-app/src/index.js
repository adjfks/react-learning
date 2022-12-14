import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello'
import Ref from './Ref'
import Comment from './Comment'

const Hi = () => {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('hi')
  }

  return (
    <a href="https://www.yuque.com/dashboard/books" onClick={handleClick}>
      我是a链接
    </a>
  )
}
const main = (
  <div>
    <Hello />
    <Hi />
    <Ref />
    <hr />
    <Comment />
  </div>
)
ReactDOM.render(main, document.getElementById('root'))
