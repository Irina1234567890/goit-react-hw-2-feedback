import propTypes from 'prop-types';
// import { Message } from './NotificationMessageStyled';

export function NotificationMessage({ message }) {
  // return <Message>{message}</Message>;
  return <div>{message}</div>
}

NotificationMessage.propTypes = {
  message: propTypes.string.isRequired,
};
