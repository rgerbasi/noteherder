import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import base from './base.js'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            
            currentNote : this.blankNote(),
            notes: []
        }
    }

    componentDidMount(){
        const notes = JSON.parse(window.localStorage.getItem('notes'))
        if(notes){
            this.setState({notes})
        }
        
        base.syncState('notes', {
            context: this,
            state: 'notes',
            asArray: true
        })

    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }

    setFocus = () => {

    }

    setCurrentNote = (note) => {
        this.setState({currentNote: note})
    }
    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())
        
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if (!note.id){
            //newnote
            note.id = Date.now()
            //console.log(Date.now())
            notes.push(note)
        } else {
            //existing note
            notes[ notes.findIndex(currentNote => currentNote.id === note.id) ] = note
        }

        this.setState({ notes })
        this.setCurrentNote(note)

        window.localStorage.setItem('notes', JSON.stringify(notes))
    }
    removeNote = () => {
        const notes = [...this.state.notes]
        
        const i = notes.findIndex(note => note.id === this.state.currentNote.id)

        if(i > -1){
            notes.splice(i,1)
            this.setState({notes: notes})
            this.setCurrentNote(this.blankNote())
        }
    }

    render(){
        return (
        <div className="Main" style={style}>
        <Sidebar resetCurrentNote={this.resetCurrentNote} signOut={this.props.signOut} />
        <NoteList notes={this.state.notes} setCurrentNote={this.setCurrentNote} />
        
        <Route
            path="/notes/:id"
            render={(navProps) => (
                <NoteForm 
                    currentNote={this.state.currentNote} 
                    saveNote={this.saveNote} 
                    removeNote={this.removeNote}
                    {...navProps}
                    />
            )}
        />
        </div>
        )
    }
}

const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',

}


export default Main