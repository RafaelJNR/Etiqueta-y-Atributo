// src/components/Card.jsx
import React from 'react';

// Usamos export const para poder importarlo en App.jsx
export const Card = ({ card, isFlipped, isMatched, onClick }) => {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${isMatched ? "matched" : ""}`}
      onClick={onClick}
    >
      <div className="card-front">?</div>
      <div className={`card-back ${card.type}`}>
        <span>{card.content}</span>
      </div>
    </div>
  );
};

// También puedes usar export default al final si lo prefieres
export default Card;