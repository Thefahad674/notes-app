import React, { useContext, useState} from 'react'
import { noteContext } from '../context/noteContext';

const Note = ({text, date, id}) => {
    const { editNote } = useContext(noteContext);
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(text);


  const handleSave = () => {
    editNote(id, editedText);
    setIsEditing(false);}

  const {deleteNote} = useContext(noteContext);


    const getDate = () => {

        const d = new Date(date);

        return`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
    }

  return (
    <div className="note">
    
    {isEditing ? (
        <>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave} className="btn">
            <i className="fa-solid fa-check"></i>
          </button>
        </>
      ) : (
        <>
          
           
         
        </>
      )}
      


          <div className="text">
            {text}</div>

          <div className="footer">
            <div className="date">{getDate()}</div>
          <button onClick={() => setIsEditing(true)} className="btn">
            <i className="fa-solid fa-pen"></i>
          </button>
            <button onClick={() => deleteNote(id)} className="btn"><i className="fa-solid fa-trash"></i></button>

            

          </div> 



          </div>
  )
}

export default Note;