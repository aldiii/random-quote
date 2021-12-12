import Header from "./components/Header";
import "./App.css";
import Quote from "./components/Quote";

const quotes = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
];
const getRandomQuoteIndex = (length) => Math.floor(Math.random() * length);

function App() {
  return (
    <div className="App">
      <Header />
      <Quote randomQuote={quotes[getRandomQuoteIndex(quotes.length)]} />
    </div>
  );
}

export default App;
