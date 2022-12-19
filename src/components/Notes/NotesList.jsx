import React from 'react'
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';

const NotesList = ({notes,handleaddNotes, handledeleteNotes}) => {
  return (
    <div className='notes-list'>
      {notes.map((item,index)=>(
        <Note key={index} text={item.text} date={item.date} id={item.id} handledeleteNotes={handledeleteNotes}/>
      ))}
    <AddNote handleaddNotes={handleaddNotes}/>
    </div>
  )
}

export default NotesList;