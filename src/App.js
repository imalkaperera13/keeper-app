import React, { useState } from "react";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import initialNotes from "./notes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import "./App.css";


function App() {
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== id));
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
