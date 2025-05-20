import React, { useContext} from 'react'
import { noteContext } from '../context/noteContext';

const Note = ({text, date, id}) => {
  
  const {deleteNote} = useContext(noteContext);


    const getDate = () => {

        const d = new Date(date);

        return`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
    }

  return (
    <div className="note">
          <div className="text">
            {text}</div>

          <div className="footer">
            <div className="date">{getDate()}</div>
            <button onClick={() => deleteNote(id)} className="btn"><i className="fa-solid fa-trash"></i></button>
          </div> 
          </div>
  )
}

export default Note;