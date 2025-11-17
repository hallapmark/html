import { Link } from "react-router-dom";
import Table from "./Components/Table";
import styles from "./Home.module.css"

function Home() {
  const imageURL = 
    "https://upload.wikimedia.org/wikipedia/commons/4/46/August_Malmström_-_Dancing_Fairies_-_Google_Art_Project.jpg";
  return (
    <div>
      <Link to="/books">
        <button className={styles.raamatudButton}>Raamatud</button>
      </Link>
      <Link to="/numbers">
        <button className={styles.raamatudButton}>Numbrid</button>
      </Link>
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
    </div>
  );
}
export default Home;
