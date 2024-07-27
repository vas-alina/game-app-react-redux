import styles from '../styles/InformationLayout.module.css'

import PropTypes from 'prop-types'

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
    return (
      <div className={styles.information_main}>
        {isDraw ? 
      'Ничья' : 
      isGameEnded ? 
      `Победа: ${currentPlayer}`: 
      `Ходит: ${currentPlayer}`}
      </div>
    );
  }


 InformationLayout.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,

 }