import { View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components/native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import SendButton from '../components/Chat/SendButton';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../apollo/mutations';

const ChatScreen = () => {
  const [messages, setMessages] = useState<any>([]);
  const [sendMessage, { data, loading, error }] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    console.log('messages',messages)

  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#993AFC',
          },
          left: {
            backgroundColor: '#FFFFFF',
          },
        }}
        textStyle={{
          right: {
            color: '#FFFFFF',
            fontFamily: 'Poppins_400Regular',
            fontSize: '14px'
          },
          left: {
            color: '#1A1A1A',
            fontFamily: 'Poppins_400Regular',
            fontSize: '14px'
          },
        }}
      />
    );
  };

  return (
    <Wrapper>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        renderAvatar={null as never}
        timeTextStyle={{
          left: { display: 'none' },
          right: { display: 'none' },
        }}
        renderSend={(props) => <SendButton {...props} />}
        renderBubble={renderBubble}
        scrollToBottom
      />
    </Wrapper>
  );
};

export default ChatScreen;

const Wrapper = styled(View)`
  background-color: ${Colors.background3};
  flex: 1;
`;
