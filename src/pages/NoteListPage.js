import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import ListItem from "../components/ListItem/ListItem";

const NoteListPage = () => {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //     return () => {
  //         axios.get('http://127.0.0.1:8000/api/notes/').then(response => {
  //             setNotes(response.data)
  //             console.log(notes)
  //         })
  //     };
  // }, [])

  useEffect(() => {
    return () => {
      getNotes();
      console.log('useeffect triggered')
    };
  });

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    console.log("DATA:", data);
    setNotes(data);
    console.log('state updated')
  };

  return (
    <div>
        <Link to='/notes/new'>
          <button className="add">Create <i className="add-icon fa-solid fa-plus"></i></button>
        </Link>
        <span className="count">{notes.length}</span>
        {notes.map((note, index) => (
            <ListItem key={index} note={note}/>
        ))}
    </div>
  );
};

export default NoteListPage;
