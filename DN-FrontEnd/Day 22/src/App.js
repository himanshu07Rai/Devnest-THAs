import React, { useState, useEffect } from "react";
import Templates from "./components/Templates";
import Meme from "./components/Meme";

import "./style.css";

function App() {
  const [templates, setTemplates] = useState(null);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    getMemes();
  }, []);
  const getMemes = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setTemplates(data.data.memes);
    // console.log(data);
  };
  // console.log(templates);

  if (!templates) {
    return <h1>Loading</h1>;
  } else
    return (
      <div className="App">
        <h1>Meme Generator</h1>
        {meme === null ? (
          <Templates templates={templates} setMeme={setMeme} />
        ) : (
          <Meme meme={meme} setMeme={setMeme} />
        )}
      </div>
    );
}

export default App;
