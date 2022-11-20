import React from 'react'

class Hello extends React.Component {
  handleClick() {
    console.log('click事件触发了')
  }
  render() {
    return <h1 onClick={this.handleClick}>抽离的Hello 类组件</h1>
  }
}

export default Hello
