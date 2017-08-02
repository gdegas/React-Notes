import React from 'react'

const NoteForm = (props) => {
  return (
    <div>
    <form id="form" onSubmit={props.handleData} method="post">
      <div className="form-group">
        <input type="text" className="form-control" id="inputTitle" placeholder="Note Title" name="noteTitle"/>
        <textarea placeholder="Note Text" name="content" id="inputContent" cols="30" rows="5"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  </div>
  )
}

export default NoteForm
