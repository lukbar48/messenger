import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOM_ITEM } from '../../apollo/queries';
import {
  ImageWrapper,
  Message,
  Name,
  Profile,
  TextWrapper,
  Time,
  Wrapper,
} from './RoomItem.style';
import { ChatScreenProp, IRoom } from '../../types';

const RoomItem = ({ item }: { item: IRoom }) => {
  const roomId = item.id;
  const navigation = useNavigation<ChatScreenProp>();
  const { loading, error, data } = useQuery(GET_ROOM_ITEM, {
    variables: {
      roomId,
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;
  if (!data) return null;

  const { room } = data;
  
  return (
    <Wrapper
      onPress={() => {
        navigation.navigate('Chat', { room } as never);
      }}
    >
      <ImageWrapper>
        <Profile />
      </ImageWrapper>
      <TextWrapper>
        <Name numberOfLines={1}>{item.name}</Name>
        <Message numberOfLines={1}>{room.messages[0].body}</Message>
      </TextWrapper>
      <Time>10 m ago</Time>
    </Wrapper>
  );
};
export default RoomItem;
