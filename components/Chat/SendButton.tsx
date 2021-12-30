import React from 'react';
import { Send } from 'react-native-gifted-chat';
import SendIcon from '../../assets/icons/SendIcon';

const SendButton = (props: Send['props']) => {
  return (
    <Send {...props} containerStyle={{ justifyContent: 'center' }}>
      <SendIcon />
    </Send>
  );
};

export default SendButton;
