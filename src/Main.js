import React from 'react'
import styleSheet from './style.css'


import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            notes: [
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
        }
    }

    render(){
        return (
        <div className="Main" style={style}>
        <Sidebar/>
        <NoteList notes={this.state.notes}/>
        <NoteForm/>
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