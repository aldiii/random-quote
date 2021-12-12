import React from "react";
import "./Quote.css";

function Quote({ randomQuote: { quote, author } }) {
  console.log(quote, author);
  return (
    <blockquote className="quote">
      <p>{quote}</p>
      <cite>{author}</cite>
    </blockquote>
  );
}

export default Quote;
