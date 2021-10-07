import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import reactDom from "react-dom";
import Card from "./components/Card";
function App() {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setCharacters(json.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  console.log(characters);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>Rick & Morty App</p>

        <ol>
          {characters.map((character) => (
            <Card character={character} />
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
