import React, { useState, useEffect } from "react";
import { useParams }  from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import "../css/home.css";

function Home() {
  const params = useParams();

  const username = params.username;

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  });

  function addNote(newNote) {
       setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  
  function getNotes() {
    axios.get(`/notes/${username}`, notes)
    .then(res => { 
        // res.json();
        setNotes(res.data);
        console.log(res.data);
        // displayNotes(notes);
    })
    .catch(err => {
      console.log(err);
    });
  }

    function displayNotes(notes)  {
    if(notes.length > 0) {
      return (
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })
      );
      
    }
    console.log(notes);

  }
 
  function deleteNote(id) {
     setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
  });
}

  return (
    
     <Container>
        <Header />
        <Grid container>
          <Grid item xs>
            <CreateArea onAdd={addNote} />
            </Grid>
            <Grid container>
              <Grid item xs>
              {displayNotes(notes)}
              </Grid>  
            </Grid>
           
          
        </Grid>
      
        <Footer /> 
      
             
     </Container>
      
    
  );
}

export default Home;
