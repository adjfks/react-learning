import React from 'react'

class Hello extends React.Component {
  state = {
    count: 10,
  }
  handleClick() {
    console.log(this)
    console.log('click事件触发了')
  }
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.handleClick()}>抽离的Hello 类组件</h1>
        <p>count: {this.state.count}</p>
        <button onClick={this.onIncrement}>+1</button>
      </div>
    )
  }
}

export default Hello
