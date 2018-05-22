import React from 'react'

import quill from './media/quill.svg'
import newIcon from './media/new.png'
import newHover from './media/new-hover.png'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder"/>
            </div>

            <a class="new-note" href="/notes">
                <img
                    className="outline"
                    src={newIcon}
                    alt="New note"
                />
                <img
                    src={newHover}
                    alt="hover"
                />
            </a>
            
            <div className="SignOut">
                <button>
                    <i className="fa fa-signout"></i>
                </button>
            </div>

        </div>
    )
}

const styles = {
    sidebar: {
        width: '6rem',
        backgroundColor: 'f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}

export default Sidebar