import React from 'react';
import VideocallIcon from '../../assets/icons/VideocallIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import LeftChevron from '../../assets/icons/LeftChevron';
import { useNavigation } from '@react-navigation/core';
import { IconWrapper } from '../TopBar/TopBar.style';
import {
  Active,
  ChevronWrapper,
  GroupInfoText,
  GroupInfoWrapper,
  IconsWrapper,
  LogoWrapper,
  Name,
  Wrapper,
} from './ChatTopBar.style';
import TWGIcon from '../../assets/icons/TWGIcon';
import { RoomsScreenProp } from '../../types';

const ChatTopBar = ({ name }: { name: string }) => {
  const navigation = useNavigation<RoomsScreenProp>();

  return (
    <Wrapper>
      <ChevronWrapper
        onPress={() => {
          navigation.navigate('Rooms');
        }}
      >
        <LeftChevron />
      </ChevronWrapper>

      <GroupInfoWrapper>
        <LogoWrapper>
          <TWGIcon />
        </LogoWrapper>
        <GroupInfoText>
          <Name numberOfLines={1}>{name}</Name>
          <Active numberOfLines={1}>Active now</Active>
        </GroupInfoText>
      </GroupInfoWrapper>

      <IconsWrapper>
        <IconWrapper>
          <PhoneIcon />
        </IconWrapper>
        <IconWrapper>
          <VideocallIcon />
        </IconWrapper>
      </IconsWrapper>
      
    </Wrapper>
  );
};

export default ChatTopBar;
