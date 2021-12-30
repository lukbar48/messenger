import styled from 'styled-components/native';
import { View } from 'react-native';
import Colors from '../../constants/Colors';

export const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
  width: 100%;
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
