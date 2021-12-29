import { Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Bubble, GiftedChat, IMessage } from 'react-native-gifted-chat';
import SendButton from '../components/Chat/SendButton';
import { useMutation, useQuery } from '@apollo/client';
import { SEND_MESSAGE } from '../apollo/mutations';
import ChatTopBar from '../components/Chat/ChatTopBar';
import { GET_ROOM_ITEM } from '../apollo/queries';
import { Wrapper } from './ChatScreen.style';

export interface IChatScreen {
  route: any;
}

const ChatScreen = ({ route }: IChatScreen) => {
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { room } = route.params;

  const { loading, error, data } = useQuery(GET_ROOM_ITEM, {
    variables: {
      roomId: room.id,
    },
    pollInterval: 1000,
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;
  if (!data) return null;

  useEffect(() => {
    setMessages(
      room.messages.map((message) => {
        const { id, body, insertedAt, user } = message;
        return {
          _id: id,
          text: body,
          createdAt: insertedAt,
          user: {
            _id: user.id,
          },
        };
      })
    );
  }, []);

  const onSend = useCallback(
    (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
      const body = messages[0].text;
      const roomId = room.id;
      sendMessage({
        variables: { body, roomId },
      });
    },
    [sendMessage, room.id]
  );

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
            fontSize: '14px',
          },
          left: {
            color: '#1A1A1A',
            fontFamily: 'Poppins_400Regular',
            fontSize: '14px',
          },
        }}
      />
    );
  };

  return (
    <Wrapper>
      <ChatTopBar name={room.name} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        alwaysShowSend
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
