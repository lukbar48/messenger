import { View, Text, FlatList } from 'react-native';
import * as React from 'react';
import RoomItem from '../components/RoomItem/RoomItem';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../apollo/queries';
import Colors from '../constants/Colors';

const RoomsScreen = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error!</Text>;
  if (!data) return null;

  return (
    <Background>
      <Wrapper>
        <FlatList
          data={data.usersRooms.rooms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RoomItem item={item} />}
        />
      </Wrapper>
    </Background>
  );
};

export default RoomsScreen;

const Wrapper = styled(View)`
  background-color: transparent;
  flex: 1;
  padding-top: 55px;
`;

const Background = styled(View)`
  background-color: ${Colors.background3};
  position: absolute;
  top: -24px;
  bottom: 0;
  left: 0;
  right: 0;
`;
