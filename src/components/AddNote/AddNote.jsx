import React from 'react'
import { useState } from 'react'

const AddNote = ({handleaddNotes}) => {
    const [noteText,setNoteText] = useState("");
    const characterLimit = 200;
    function handleChange(e){
        if (characterLimit - e.target.value.length >= 0){ 
            setNoteText(e.target.value)
        }
    }
    function handleClick() {
        if(noteText.trim().length >0){
            handleaddNotes(noteText);
            setNoteText("")
        }
    }

  return (
     <div className="note addnote">
        <textarea name="" id="" cols="10" rows="8" 
            placeholder='Type to add a note..' 
            className='textarea'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Words Left</small>
            <button className='delete save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote