import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TelegramIcon from '@mui/icons-material/Telegram';

class Button extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  resetForm = () => {
    this.setState({ name: '', email: '', message: '' });
  };

  logFormDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    const recipient = `mailto:${this.props.email}`;
    const subject = '?subject=Hello!';
    const body = `&body=${this.props.formValues.message}`;

    return (
      <button className='send-button'>
        <div className='contact-btn-text'>
          <a
            href={`${recipient}${subject}${body}`}
            disabled={this.state.isClicked}
            onClick={this.resetForm}
          >
            Send Email
          </a>
          <TelegramIcon className='icon' />
        </div>
      </button>
    );
  }
}

export default Button;
