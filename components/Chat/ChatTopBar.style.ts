import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Colors from '../../constants/Colors';

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 90px;
  z-index: 10;
  background-color: ${Colors.background2};
  border-bottom-right-radius: 24px;
  border-bottom-left-radius: 24px;
`;

export const IconsWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  padding: 2px;
  background-color: ${Colors.white};
  margin: 5px;
  overflow: hidden;
`;

export const GroupInfoWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const GroupInfoText = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  flex: 1;
`;

export const Name = styled(Text)`
  font-size: 14px;
  font-family: 'Poppins_600SemiBold';
  color: ${Colors.plum3};
`;

export const Active = styled(Text)`
  font-size: 14px;
  font-family: 'Poppins_400Regular';
  color: ${Colors.white};
`;

export const ChevronWrapper = styled(TouchableOpacity)`
  height: 100%;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

export const LogoWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  margin: 5px;
  overflow: hidden;
`;