import { useState } from "react";

function Numbers() {
  const origArray = [4, 23, 7, 39, 19, 0, 9, 14, 135, 204, 43]
  const [numbers, setNumbers] = useState(origArray.slice());

  const sortAscending = () => {
    const numbersCopy = numbers.slice();
    numbersCopy.sort((a,b) => a - b);
    setNumbers(numbersCopy);
  }

  const sortDescending = () => {
    const numbersCopy = numbers.slice();
    numbersCopy.sort((a,b) => b - a);
    setNumbers(numbersCopy);
  }

  const sortNumbersAlphabetically = () => {
    const numbersCopy = numbers.slice();
    numbersCopy.sort((a,b) => a.toString().localeCompare(b.toString()));
    setNumbers(numbersCopy);
  }

  const sortNumbersAlphabeticallyReversed = () => {
    const numbersCopy = numbers.slice();
    numbersCopy.sort((a,b) => b.toString().localeCompare(a.toString()));
    setNumbers(numbersCopy);
  }

  const retainBiggerThan8 = () => {
    const answer = numbers.filter(n => n > 8);
    setNumbers(answer);
  }

  const retainSmallerThan10 = () => {
    const answer = numbers.filter(n => n < 10);
    setNumbers(answer);
  }

  const retainEvens = () => {
    const answer = numbers.filter(n => n % 2 === 0);
    setNumbers(answer);
  }

  const retainOdds = () => {
    const answer = numbers.filter(n => n % 2 !== 0);
    setNumbers(answer);
  }

  const retainStarting1 = () => {
    const answer = numbers.filter(n => n.toString().startsWith("1"));
    setNumbers(answer);
  }

  const retainContaining3 = () => {
    const answer = numbers.filter(n => n.toString().includes("3"));
    setNumbers(answer);
  }

  const reset = () => {
    setNumbers(origArray.slice());
  }

  return (
    <div>
      <button onClick={sortAscending}>Ascending</button>
      <button onClick={sortDescending}>Descending</button>
      <button onClick={sortNumbersAlphabetically}>Alphabetically</button>
      <button onClick={retainBiggerThan8}>Retain bigger than 8</button>
      <button onClick={retainSmallerThan10}>Retain smaller than 10</button>
      <button onClick={retainEvens}>Retain evens</button>
      <button onClick={retainOdds}>Retain odds</button>
      <button onClick={retainStarting1}>Retain numbers starting 1</button>
      <button onClick={retainContaining3}>Retain numbers containing 3</button>
      <button onClick={reset}>Reset</button>
      <div>
        {numbers.map((number, i) => 
          <div key={i}>{number}</div>
        )}
      </div>
    </div>
  )
}
export default Numbers