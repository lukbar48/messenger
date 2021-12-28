import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

const RoomItem = ({ item }: { item: any }) => {
  const roomID = item.id;
  const navigation = useNavigation();

  item && console.log(item.name)
  
    return (
    <Wrapper
      onPress={() => {
        navigation.navigate('Chat' as never, { roomID } as never);
      }}
    >
      <View>
        <Name numberOfLines={1}>{item ? item.name : null}</Name>
        <Message numberOfLines={1}>{'Ron sent a photo. Ron sent a photo.'}</Message>
        <Time>10 m ago</Time>
      </View>
    </Wrapper>
  )}
;

export default RoomItem;

const Wrapper = styled(TouchableOpacity)`
  position: relative;
  backgroundColor: #5603ad;
  padding: 10px;
  borderRadius: 12px;
  marginTop: 10px;
  border: 1px solid black;
`;

const Name = styled(Text)`
  color: #FFFFFF;
`
const Message = styled(Text)`
  color: #FFFFFF;
`
const Time = styled(Text)`
  position: absolute;
  top: 0;
  right: 0;
  textAlign: right;
  color: #9FA2B2;
  fontSize: 13px;
  lineHeight: 16px;
`

function GET_ROOM(GET_ROOM: any, arg1: { variables: { roomId: any; }; }): { loading: any; error: any; data: any; } {
  throw new Error('Function not implemented.');
}
