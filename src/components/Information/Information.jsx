import { InformationLayout } from '../../layout/InformationLayout';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentPlayer } from '../../selectors/select-current-player';
import { selectIsDrow } from '../../selectors/select-is-drow';
import { selectIsGameEnded } from '../../selectors/select-is-game-ended';

export const Information = () => {
  const isDraw = useSelector(selectIsDrow)
  const isGameEnded = useSelector(selectIsGameEnded)
  const currentPlayer = useSelector(selectCurrentPlayer)
    return (
      <InformationLayout
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
    );
  }
  


Information.propTypes = {
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    currentPlayer: PropTypes.string,
  };