// src/utils/gameLogic.js

/**
 * Calcula el nuevo estado de los equipos tras un ataque
 */
export const calculateAttack = (teams, attackerId, targetId) => {
  return teams.map((team) => {
    if (team.id === attackerId) return { ...team, jokers: team.jokers - 1 };
    if (team.id === targetId) return { ...team, score: Math.max(0, team.score - 10) };
    return team;
  });
};

/**
 * Actualiza el score de un equipo específico
 */
export const calculateScoreUpdate = (teams, teamId, points) => {
  return teams.map((t) => (t.id === teamId ? { ...t, score: t.score + points } : t));
};

export const speakDefinition = (text) => {
  // Cancelamos cualquier locución anterior para que no se amontonen
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES'; // Idioma español
  utterance.rate = 0.8; // Velocidad normal
  utterance.pitch = 1; // Tono normal
  
  window.speechSynthesis.speak(utterance);
};