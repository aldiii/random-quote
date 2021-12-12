import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import "./App.css";
import Quote from "./components/Quote";
import Button from "./components/Button";
import quotesApi from "./api/quotesAPI";

const getRandomQuoteIndex = (length) => Math.floor(Math.random() * length);

function App() {
  const [quotes, setQuotes] = useState([]);
  const [actualQuoteId, setActualQuoteId] = useState(null);
  const [previousQuoteId, setPreviousQuoteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handlePrevBtnClick = useCallback(() => {
    setActualQuoteId(previousQuoteId);
    setPreviousQuoteId(null);
  }, [previousQuoteId]);

  const handleNextBtnClick = useCallback(() => {
    setPreviousQuoteId(actualQuoteId);
    setActualQuoteId(getRandomQuoteIndex(quotes.length));
  }, [actualQuoteId]);

  useEffect(() => {
    quotesApi
      .getAllQuotes()
      .then((quotes) => {
        setQuotes(quotes);
        setActualQuoteId(getRandomQuoteIndex(quotes.length));
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? (
        "Ładowanie cytatów ..."
      ) : error ? (
        "Błąd przy pobieraniu z API"
      ) : (
        <Quote randomQuote={quotes[actualQuoteId]} />
      )}
      <div className="button-group">
        <Button
          disabled={previousQuoteId === null}
          handleClick={handlePrevBtnClick}
        >
          Poprzedni
        </Button>
        <Button handleClick={handleNextBtnClick}>Następny</Button>
      </div>
    </div>
  );
}

export default App;
