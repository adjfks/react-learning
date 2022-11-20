import React from 'react'

class Hello extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     count: 0,
  //   }
  // }

  state = {
    count: 10,
  }
  handleClick() {
    console.log('click事件触发了')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>抽离的Hello 类组件</h1>
        <p>count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Hello
