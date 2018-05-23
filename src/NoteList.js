import React from 'react'

import './NoteList.css'

import Note from './Note'

const NoteList = () => {

    const notes = [
        {
            id :1,
            title: 'why i <3 js',
            body: 'jsiscodewhomstv',
        },
        {
            id: 2,
            title: 'thots',
            body: 'he'
        },


    ]

    return (
        <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
                { notes.map(note => <Note note={note} />)}
            </a>
          </ul>
        </div>
    )
}
export default NoteList