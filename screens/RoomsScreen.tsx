import { View, Text, FlatList } from 'react-native';
import * as React from 'react';
import RoomItem from '../components/RoomItem/RoomItem';
import styled from 'styled-components';

const dummyData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    message: 'siemaeloo'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    message: 'siemaeloo'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    message: 'siemaeloo'
  },
];

const RoomsScreen = () => {
  return (
    <Wrapper>
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RoomItem item={item} />}
      />
    </Wrapper>
  );
};

export default RoomsScreen;

const Wrapper = styled(View)`
  backgroundColor: #F0F8FF;
  flex: 1;
  paddingTop: 30px;

`