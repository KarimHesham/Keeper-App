import React from "react";
import { useParams }  from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

function Note(props) {
  const params = useParams();

  const username = params.username;
  
  function handleClick() {   
    axios.delete(`https://thisiskeeper.herokuapp.com/${username}/`+props.id)
    .then(res => "Note Deleted")
    .catch(err => console.log(err));
    props.onDelete(props.id);  
  }

  return (
    
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <DeleteIcon  />
      </button>
    </div>
  );
}

export default Note;
