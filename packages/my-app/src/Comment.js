import React from 'react'

class Comment extends React.Component {
  state = {
    current: {
      name: '',
      content: '',
    },
    list: [],
  }

  handleForm = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? 'checked' : 'value'
    this.setState({
      current: {
        ...this.state.current,
        [target.name]: target[value],
      },
    })
  }

  submit = () => {
    const { name, content } = this.state.current
    if (!((name ?? undefined) || (content ?? undefined))) return
    this.setState({
      list: this.state.list.concat([
        {
          id: Date.now(),
          name,
          content,
        },
      ]),
    })
  }

  render() {
    return (
      <div>
        <div>
          <p>
            <input
              name="name"
              placeholder="please enter name"
              onChange={this.handleForm}
            />
          </p>
          <p>
            <textarea
              name="content"
              placeholder="please input some contents"
              onChange={this.handleForm}
            />
          </p>
          <p>
            <button onClick={this.submit}>comment</button>
          </p>
        </div>
        <ul>
          {this.state.list.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Comment
