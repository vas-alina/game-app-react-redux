import { useSelector } from 'react-redux';
import { FieldLayout } from '../../layout/FieldLayout';
import PropTypes from 'prop-types';
import { selectField } from '../../selectors/select-field';

export const Field = ({onButtonClick }) => {
    const  field = useSelector(selectField)
    return(
        
        <>
        <FieldLayout field={field} onButtonClick={onButtonClick} />
       
        </>
    )
}

Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.any).isRequired,
    onButtonClick: PropTypes.func.isRequired
  };