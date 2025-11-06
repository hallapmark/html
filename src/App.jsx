// import { useState } from 'react'
import "./App.css";
import Table from "./Components/Table";

function App() {
  // const [count, setCount] = useState(0)
  const imageURL =
    "https://upload.wikimedia.org/wikipedia/commons/4/46/August_Malmström_-_Dancing_Fairies_-_Google_Art_Project.jpg";
  return (
    <>
      <button>Nupp</button>
      <p className="sinine">
        <em>Siin on sinine tekst.</em>
      </p>
      <p className="roheline">Roheline tekst.</p>
      <img
        className="paremkleepuv"
        src={imageURL}
        alt="August_Malmström_-_Dancing_Fairies"
      />
      <Table />
      <iframe
        width="600"
        height="450"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
      ></iframe>
    </>
  );
}

export default App;
