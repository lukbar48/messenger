import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useQuery } from '@apollo/client';
import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import ProfileIcon from '../../assets/icons/ProfileIcon';

const RoomItem = ({ item }: { item: any }) => {
  const roomID = item.id;
  const navigation = useNavigation();

  
    return (
    <Wrapper
      onPress={() => {
        navigation.navigate('Chat' as never, { roomID } as never);
      }}
    >
      <ImageWrapper>
        <Profile />
      </ImageWrapper>
      <TextWrapper>
        <Name numberOfLines={1}>{item.name}</Name>
        <Message numberOfLines={1}>{'Ron sent a photo. Ron sent a photo.'}</Message>
      </TextWrapper>
        <Time>10 m ago</Time>
    </Wrapper>
  )}
;

export default RoomItem;

const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 88px;
  position: relative;
  background-color: ${Colors.plum3};
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
  border: 1px solid black;
`;

const Name = styled(Text)`
  color: ${Colors.white};
  font-family: 'Poppins_500Medium';
  font-size: 15px;
`
const Message = styled(Text)`
  color: ${Colors.white};
  font-family: 'Poppins_400Regular';
  font-size: 14px;
`
const Time = styled(Text)`
  position: absolute;
  top: 8px;
  right: 10px;
  text-align: right;
  color: ${Colors.gray3};
  font-size: 13px;
  line-height: 16px;
  font-family: 'Poppins_400Regular';
  font-size: 13px;
`

const TextWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-right: 20px;
  margin-top: 2px;
`

  const ImageWrapper = styled(View)`
    marginRight: 20px;
  `
  
  const Profile = styled(ProfileIcon)`
    object-fit: contain
  `