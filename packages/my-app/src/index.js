import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render() {
    return <h1>Hello 类组件</h1>
  }
}
const main = (
  <div>
    <Hello />
  </div>
)
ReactDOM.render(main, document.getElementById('root'))
