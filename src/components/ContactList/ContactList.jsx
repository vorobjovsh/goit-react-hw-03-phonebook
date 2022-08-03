import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList ({contacts, onDeleteContact}) {

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} >
          <p>{name} :  <span className={s.spanNumber}>{number}</span>
            <button
            type="button"
            className={s.btnDelete}
            onClick={() => onDeleteContact(id)}
            >
           Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;
