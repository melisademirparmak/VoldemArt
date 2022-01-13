import React from 'react';
import '../Card/card.css';

function Card({ children }) {
  return (
    <div className="card">
      <div className="card__header">{children}</div>
    </div>
  );
}

export default Card;
