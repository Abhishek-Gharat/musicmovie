import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Movies: [
    { name: "🎥 Lost in the space", rating: "5/5" },
    { name: "🎥 Tumbad", rating: "5/5" },
    { name: "🎥 om shanti om", rating: "5/5" }
  ],

  Bollywood: [
    {
      name: " kk ",
      rating: "🎼 Aakho me teri Ajab si"
    },
    {
      name: "Arjit singh ",
      rating: "🎼 Kabira"
    }
  ],
  Popmusic: [
    {
      name: " Justin Bieber, The Kid LAROI",
      rating: "🎵 Stay"
    },
    {
      name: "Ariana Grande",
      rating: "🎵 SIDE TO SIDE"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Popmusic");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 Movies and music </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        These is my favorite music and Movies listStyle{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "4rem",
              padding: "0.5rem  2rem",
              border: "5px solid black",
              margin: "3rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "2rem 10rem",
                border: "2px solid black",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "20px" }}> {book.name} </div>
              <div style={{ fontSize: "10px" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
