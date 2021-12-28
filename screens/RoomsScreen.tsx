import { View, Text, FlatList } from 'react-native';
import * as React from 'react';
import RoomItem from '../components/RoomItem/RoomItem';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../apollo/queries';

const RoomsScreen = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);
  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!</Text>

  return (
    <Wrapper>
      <FlatList
        data={data.usersRooms.rooms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RoomItem item={item} />}
      />
    </Wrapper>
  );
};

export default RoomsScreen;

const Wrapper = styled(View)`
  backgroundcolor: #f0f8ff;
  flex: 1;
  padding-top: 35px;
`;
