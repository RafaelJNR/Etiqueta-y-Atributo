// src/hooks/useGame.js
import { useState, useEffect } from "react";
import { calculateAttack, calculateScoreUpdate, speakDefinition } from "../utils/gameLogic"; // <-- Importa la función

export const useGame = (initialCards) => {
  const [cards, setCards] = useState(initialCards);
  const [teams, setTeams] = useState([
    { id: 0, name: "Equipo Rojo", score: 0, jokers: 3, color: "#ff4d4d" },
    { id: 1, name: "Equipo Azul", score: 0, jokers: 3, color: "#007acc" },
    { id: 2, name: "Equipo Verde", score: 0, jokers: 3, color: "#4caf50" },
  ]);
  const [turn, setTurn] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const cardA = cards[first];
      const cardB = cards[second];
      const isMatch = cardA.match === cardB.content;

      const timer = setTimeout(() => {
        if (isMatch) {
          setMatchedCards((prev) => [...prev, cardA.id, cardB.id]);
          setTeams(prev => calculateScoreUpdate(prev, turn, 15));
          
          // --- LÓGICA DE VOZ ---
          // Leemos la definición de la primera carta (o podrías combinar ambas)
          const info = `${cardA.content} y ${cardB.content}. ${cardA.description}`;
          speakDefinition(info);
          // ---------------------------

        } else {
          setTurn((prev) => (prev + 1) % 3);
        }
        setFlippedCards([]);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [flippedCards, cards, turn]);

  const handleCardClick = (index) => {
    if (flippedCards.length < 2 && !flippedCards.includes(index) && !matchedCards.includes(cards[index].id)) {
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  const handleAttack = (targetId) => {
    if (teams[turn].jokers > 0) {
      setTeams(prev => calculateAttack(prev, turn, targetId));
    }
  };

  return { teams, turn, cards, flippedCards, matchedCards, handleCardClick, handleAttack };
};