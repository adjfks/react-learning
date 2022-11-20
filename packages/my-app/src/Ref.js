import React from 'react'

class Ref extends React.Component {
  constructor() {
    super()
    this.txtRef = React.createRef()
  }

  txtChange = () => {
    console.log('this.txtRef.current.value: ', this.txtRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="value" ref={this.txtRef} onChange={this.txtChange} />
      </div>
    )
  }
}

export default Ref
