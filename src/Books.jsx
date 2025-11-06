import { useState } from "react";

function Books() {
  const booksDB = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Summer Book", "House of Day, House of Night"]
  const [books, setBooks] = useState(booksDB);

  return (
    <div>
      <button onClick={() => {
        const booksCopy = books.slice();
        booksCopy.sort((a,b) => a.localeCompare(b));
        setBooks(booksCopy);
        }}
      >Sorteeri AZ</button>

      <button onClick={() => {
        const booksCopy = books.slice();
        booksCopy .sort((a,b) => b.localeCompare(a));
        setBooks(booksCopy);
        }}
      >Sorteeri ZA</button>

      <h1>Books</h1>
      {books.map((book) => 
        <div>
          <label>{book}</label>
          <br />
        </div>
      )}
    </div>
  )
}
export default Books