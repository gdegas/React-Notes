import React, { Component } from 'react'
import NoteForm from './add-note'

export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.handleData = this.handleData.bind(this)

  }

  async componentDidMount() {
    try {
      let response = await fetch('/notes')
      let notes = await response.json()
      this.setState({ notes })
    }
    catch (err) {
      console.log(err)
    }
  }

  handleData(event) {

    event.preventDefault()
    const formData = new FormData(event.target)
    const typedData = {
      title: formData.get('noteTitle'),
      content: formData.get('content')
    }
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(typedData)
    })
    .then(() => {
      const state = this.state.notes.slice()
      state.push(typedData)
      this.setState({notes: state})
    })
    .catch(err => {
      console.log('ERROR', err)
    })

  }

  render() {
    return (
      <div>
        <h1 className="text-center">React Notes</h1>
        <hr />
        <NoteForm handleData={this.handleData} />
        <div>
          {!this.state.notes.length
          ? <p>...Loading</p>
          : this.state.notes.map((notes, i) => {
            return (
              <div className="card" key={ i }>
                <div className="card-block">
                  <h4 className="card-title">{notes.title}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">{notes.create_date}</h6>
                  <p className="card-text">{notes.content}</p>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}
