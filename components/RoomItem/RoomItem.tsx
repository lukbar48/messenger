import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';

const RoomItem = ({ item }: { item: any }) => {
  const roomID = item.id;
  const navigation = useNavigation();
  return (
    <Wrapper
      onPress={() => {
        navigation.navigate('Chat' as never, { roomID } as never);
      }}
    >
      <View>
        <Name>{item.name}</Name>
        <Message>{item.message}</Message>
        <Time>10m ago</Time>
      </View>
    </Wrapper>
  );
};

export default RoomItem;

const Wrapper = styled(TouchableOpacity)`
  position: relative;
  backgroundColor: #5603ad;
  padding: 10px;
  borderRadius: 12px;
  marginTop: 10px;
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