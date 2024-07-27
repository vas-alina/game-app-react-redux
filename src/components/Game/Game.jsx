import '../../App.css'
// import { store } from '../../store';
import { GameLayout } from '../../layout/GameLayout';
import { useGameState } from '../../hooks/useGameState'

export const Game = () => {

const { gameState, handleFieldClick, handleResetGame } = useGameState();

console.log('Game component:', gameState);

if (!gameState) {
  return <div>Loading...</div>;
}
  return (

  <>
  <GameLayout 
  isDraw={gameState.isDraw} 
  isGameEnded={gameState.isGameEnded} 
  currentPlayer={gameState.currentPlayer} 
  field={gameState.field} 
  onButtonClick={handleFieldClick}
  handleResetGame={handleResetGame}/>
  </>
  )
}