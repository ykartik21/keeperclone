import React from "react";

const Note = ({text,date,id,handledeleteNotes}) => {
 
  return <div className="note">
    <span className="note-text">{text}</span>
    <div className="note-footer">
      <span className="date">{date}</span>
      <button className="delete" onClick={()=>{
      handledeleteNotes(id)
      }}>Delete</button>
    </div>
    </div>;
};

export default Note;
