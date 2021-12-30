import { View } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../constants/Colors';

export const Wrapper = styled(View)`
  background-color: transparent;
  flex: 1;
  padding-top: 55px;
`;

export const Background = styled(View)`
  background-color: ${Colors.background3};
  position: absolute;
  top: -24px;
  bottom: 0;
  left: 0;
  right: 0;
`;
