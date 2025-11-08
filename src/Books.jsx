import { useState } from "react";

function Books() {
  const booksDB = ["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Summer Book", "House of Day, House of Night"]
  const [books, setBooks] = useState(booksDB.slice());

  const sortByNoOfWordsAsc = () => {
    const booksCopy = books.slice();
    booksCopy.sort((a,b) => {
      return a.split(" ").length - b.split(" ").length;
    }); 
    setBooks(booksCopy);
  }

  const sortByNoOfWordsDesc = () => {
    const booksCopy = books.slice();
    booksCopy.sort((a,b) => {
      return b.split(" ").length - a.split(" ").length;
    });
    setBooks(booksCopy);
  }

  const sortByNextToLastCharAZ = () => {
    const booksCopy = books.slice();
    booksCopy.sort((a,b) => {
      const aNextToLast = a.length > 1 ? a[a.length-2] : a[0];
      const bNextToLast = b.length > 1 ? b[b.length-2] : b[0];
      return aNextToLast.localeCompare(bNextToLast);
    });
    setBooks(booksCopy);
  }

  const sortByNextToLastCharZA = () => {
    const booksCopy = books.slice();
    booksCopy.sort((a,b) => {
      const aNextToLast = a.length > 1 ? a[a.length-2] : a[0];
      const bNextToLast = b.length > 1 ? b[b.length-2] : b[0];
      return bNextToLast.localeCompare(aNextToLast);
    });
    setBooks(booksCopy);
  }

  // Filter
  const leaveOnlyBeginnningWithThe = () => {
    setBooks(books.filter((book) => book.toLowerCase().startsWith("the")));
  }

  const leaveOnlyThreeOrMoreWords = () => {
    setBooks(books.filter((book) => book.split(" ").length >= 3));
  }

  const reset = () => {
    setBooks(booksDB.slice());
  }

  return (
    <div>
      {/* Sorteeri */}
      <button onClick={() => {
        const booksCopy = books.slice();
        booksCopy.sort((a,b) => a.localeCompare(b));
        setBooks(booksCopy);
        }}
      >Sorteeri AZ</button>

      <button onClick={() => {
        const booksCopy = books.slice();
        booksCopy.sort((a,b) => b.localeCompare(a));
        setBooks(booksCopy);
        }}
      >Sorteeri ZA</button>

      <button onClick={sortByNoOfWordsAsc}>Sort number of words ascending</button>
      <button onClick={sortByNoOfWordsDesc}>Sort number of words descending</button>
      <button onClick={sortByNextToLastCharAZ}>Sort by next-to-last AZ</button>
      <button onClick={sortByNextToLastCharZA}>Sort by next-to-last ZA</button>

      {/* Filtreeri */}
      <button onClick={leaveOnlyBeginnningWithThe}>Keep titles beginning with "The"</button>
      <button onClick={leaveOnlyThreeOrMoreWords}>Keep titles containing at least 3 words</button>

      <h1>Books</h1>
      {books.map((book) => 
        <div key={book}>
          <label>{book}</label>
          <br />
        </div>
      )}
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Books