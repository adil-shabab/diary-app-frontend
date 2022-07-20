import React from "react";
import { Link } from "react-router-dom";


let getTitle = (note) => {
  let title = note.body.split('/n')[0]
  if (title.length > 35){
      return title.slice(0,35)
  }
  return title
}


let getTime= (note) => {
  return new Date(note.updated).toLocaleDateString()
}


let getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replaceAll('/n', ' ')
  content = content.replaceAll(title, '')

  if (content.length > 35){
    return content.slice(0,35) + '...'
  }else{
    return content
  }
}


const ListItem = ({ note }) => {
  return (
    <div className="notes">
      <Link to={`/notes/${note.id}`}>
        <h3>{getTitle(note)} </h3>
        <p><span>{getTime(note)}</span></p>
        <p><span className="content">{getContent(note)}</span></p>
      </Link>
    </div>
  );
};

export default ListItem;
