import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./components/Notes/NotesList";
import { nanoid } from "nanoid";
import AddNote from "./components/AddNote/AddNote";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
  const [notes, setNotes] = useState([
    { text: "This is my first note", date: "15/04/2022", id: nanoid() },
    { text: "This is my second note", date: "16/04/2022", id: nanoid() },
    { text: "This is my third note", date: "17/04/2022", id: nanoid() },
    { text: "This is my fourth note", date: "18/04/2022", id: nanoid() },
  ]);
  const [searchText, setSearchText] = useState("");
  const [theme, setTheme] = useState("light");
  function addNotes(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function deleteNote(id) {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  }
  function toggleTheme() {
    if (theme === "light") {
      return setTheme("dark");
    } else if (theme === "dark") {
      return setTheme("light");
    }
  }
  const color = theme === "light" ? "white" : "black";

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedItems) {
      setNotes(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="app">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Search setSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleaddNotes={addNotes}
          handledeleteNotes={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
