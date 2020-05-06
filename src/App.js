import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <TextField {...{ title, setTitle, body, setBody }} />
      <MarkdownPreviewer {...{ title, body }} />
    </div>
  );
}

export default App;
