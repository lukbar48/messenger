import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 88px;
  position: relative;
  background-color: ${Colors.white};
  padding: 10px;
  border-radius: 12px;
  margin-top: 10px;
`;

export const Name = styled(Text)`
  color: ${Colors.black};
  font-family: 'Poppins_500Medium';
  font-size: 15px;
`
export const Message = styled(Text)`
  color: ${Colors.black};
  font-family: 'Poppins_400Regular';
  font-size: 14px;
`
export const Time = styled(Text)`
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

export const TextWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-right: 20px;
  margin-top: 2px;
`

export const ImageWrapper = styled(View)`
  margin-right: 20px;
  overflow: hidden;
`

export const Profile = styled(ProfileIcon)`
  object-fit: contain
`