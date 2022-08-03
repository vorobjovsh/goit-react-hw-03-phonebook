import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
//import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit} >
        <label>
          <p className={s.name}>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          <p className={s.name}>Number</p>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={s.addBtn} type="submit" >
          Add contact
        </button>
      </form>

           )
  }

}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
