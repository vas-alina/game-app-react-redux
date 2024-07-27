import '../../App.css'
import { GameLayout } from '../../layout/GameLayout';
import { useGameState } from '../../hooks/useGameState'

export const Game = () => {

const { gameState, handleFieldClick, handleResetGame } = useGameState();


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