import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Books from "./books";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/books" element={ <Books />} />

        <Route path="/*" element={ 
          <div>
            <h2>404</h2>
            <h3>Page not found</h3>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App;
