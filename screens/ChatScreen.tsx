import { View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components/native';
import { GiftedChat } from 'react-native-gifted-chat';
import SendButton from '../components/Chat/SendButton';

const ChatScreen = () => {
  const [messages, setMessages] = useState<any>([]);

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
  }, []);

  return (
    <Wrapper>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
        renderAvatar={null as any}
        timeTextStyle={{
          left: { display: 'none' },
          right: { display: 'none' },
        }}
        renderSend={(props) => <SendButton {...props} />}
      />
    </Wrapper>
  );
};

export default ChatScreen;

const Wrapper = styled(View)`
  background-color: ${Colors.background3};
  flex: 1;
`;
