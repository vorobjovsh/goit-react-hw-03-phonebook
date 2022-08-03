import PropTypes from 'prop-types';
import s from './Filter.module.css';
//import shortid from 'shortid';

const Filter = ({ value, onChange }) => (
  <label>
    <p className={s.title}>Find contacts by name</p>
    <input className={s.inputFilter} type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
 value: PropTypes.string.isRequired,
 onChange: PropTypes.func.isRequired
};

export default Filter;
