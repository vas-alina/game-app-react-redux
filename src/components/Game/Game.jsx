
import '../../App.css'
import { useGameLogic } from '../../hooks/useGameLogic';
import { useGameState } from '../../hooks/useGameState';
import { GameLayout } from '../../layout/GameLayout';
// import background from './assets/background.png'

export const Game = () => {

const { gameState,
    setGameState,
    handleResetGame} = useGameState()

const { checkWin,
    checkDraw } = useGameLogic(setGameState)

const handleFieldClick = (index) => {
  if(gameState.isGameEnded || gameState.field[index] !== '' ){
     return
  }
   

const updatedField = gameState.field.map((value, i) => 
    i === index ? gameState.currentPlayer : value
  );
    setGameState(prevState => ({
      ...prevState,
      field: updatedField
    }));


if (!checkWin(updatedField) && !checkDraw(updatedField)) {
  setGameState(prevState => ({
    ...prevState,
    currentPlayer: prevState.currentPlayer === 'X' ? '0' : 'X'
    }));  
}
};

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