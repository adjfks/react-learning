import React from 'react'

class Hello extends React.Component {
  state = {
    count: 10,
    txt: 'txt',
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

  onInputChange = (e) => {
    this.setState({
      txt: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.handleClick()}>抽离的Hello 类组件</h1>
        <p>count: {this.state.count}</p>
        <button onClick={this.onIncrement}>+1</button>
        <input
          type="text"
          value={this.state.txt}
          onChange={this.onInputChange}
        ></input>
      </div>
    )
  }
}

export default Hello
