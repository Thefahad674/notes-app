import { createContext, useEffect, useState } from "react";
import { notes as notesData } from "../data/notesData";
export const noteContext = createContext(null);

export default function ContextProvider(props) {
  const [notes, setNotes] = useState(null);
  

  useEffect(() => {
    const fetchedData = fetchFromLocal();
    setNotes(fetchedData);
  }, []);

  useEffect(() => {
    if (notes) {
      saveToLocal();
    }
  }, [notes]);

  const addNote = (newNote) => {
   
      setNotes((prev) => {
       if(prev) {
          return [newNote, ...prev]

       }


       return [newNote];
        } );
   
  };

  const deleteNote = (idx) => {
    setNotes((prev) => {
      const temp = [...prev];

      temp.splice(idx, 1);

      return temp;
    });
  };

  const saveToLocal = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  const fetchFromLocal = () => {
    return JSON.parse(localStorage.getItem("notes"));
  };

  
  // Inside noteContext.js
  const editNote = (index, updatedText) => {
    setNotes(prevNotes =>
      prevNotes.map((note, i) =>
        i === index ? { ...note, text: updatedText } : note
  )
);
};
const val = {
  notes,
  addNote,
  deleteNote,
  editNote
};


  return (
    <noteContext.Provider value={val}>{props.children}</noteContext.Provider>
  );
}


