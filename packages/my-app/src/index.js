import React from 'react'
import ReactDOM from 'react-dom'

function Hello() {
  return <h1>Hello 函数组件</h1>
}

const Hi = () => <h1>Hi 函数组件</h1>

const Nothing = () => null

const main = (
  <div>
    <Hello />
    <Hi />
    <Nothing />
  </div>
)
ReactDOM.render(main, document.getElementById('root'))
