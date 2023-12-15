import { useState } from 'react'
import NotesTag from '../notestag/NotesTag'
import './notesmenu.css'
import AddNotesPopup from '../addnotespopup/AddNotesPopup';

const NotesMenu = ({setIsPopup}) => {
  return (
    <div className='left_container'>
        <div className='left_title_container'>

    <h1>Pocket Notes</h1>

        </div>

        <NotesTag />
        <div className="add_notes" onClick={()=> {setIsPopup(true)}}>+</div>
        
    </div>
  )
}

export default NotesMenu