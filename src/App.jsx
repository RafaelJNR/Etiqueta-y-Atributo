// src/App.jsx
import { initialCards } from "./data/data";
import { useGame } from "./hooks/useGame";
import Card from "./components/Card"; // Importación por defecto
import "./App.css";

function App() {
  // Extraemos toda la lógica del juego desde nuestro Hook personalizado
  const { 
    teams, 
    turn, 
    cards, 
    flippedCards, 
    matchedCards, 
    handleCardClick, 
    handleAttack 
  } = useGame(initialCards);

  // Función para reiniciar la página
  const resetGame = () => {
    window.location.reload();
  };

  return (
    <div className="game-container">
      <header>
        <h1>HTML Match Battle</h1>
        <div 
          className="current-turn" 
          style={{ backgroundColor: teams[turn].color }}
        >
          Turno de: {teams[turn].name}
        </div>
      </header>

      {/* SECCIÓN DE MARCADORES Y EQUIPOS */}
      <div className="teams-grid">
        {teams.map((team) => (
          <div 
            key={team.id} 
            className={`team-box ${turn === team.id ? "active" : ""}`}
          >
            <h3>{team.name}</h3>
            <p className="score">{team.score} pts</p>
            <p className="jokers">
              {"🃏".repeat(team.jokers)}
            </p>
            
            {/* Botón de ataque: solo aparece para los rivales */}
            {turn !== team.id && (
              <button 
                className="attack-btn" 
                onClick={() => handleAttack(team.id)} 
                disabled={teams[turn].jokers === 0}
              >
                Atacar (-10)
              </button>
            )}
          </div>
        ))}
      </div>

      {/* EL TABLERO DE JUEGO */}
      <div className="board">
        {cards.map((card, index) => (
          <Card 
            key={card.id}
            card={card}
            // La carta se voltea si está seleccionada o si ya fue emparejada
            isFlipped={flippedCards.includes(index) || matchedCards.includes(card.id)}
            isMatched={matchedCards.includes(card.id)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {/* BOTÓN DE REINICIO */}
      <footer>
        <button className="reset-btn" onClick={resetGame}>
          Reiniciar Juego
        </button>
      </footer>

      {/* MENSAJE DE VICTORIA (Opcional) */}
      {matchedCards.length === cards.length && (
        <div className="victory-message">
          <h2>¡Juego Terminado!</h2>
          <p>Revisa quién tiene más puntos en el marcador.</p>
        </div>
      )}
    </div>
  );
}

export default App;