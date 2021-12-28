import { View, Text, FlatList } from 'react-native';
import * as React from 'react';
import RoomItem from '../components/RoomItem/RoomItem';
import styled from 'styled-components/native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../apollo/queries';
import Colors from '../constants/Colors';

const RoomsScreen = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);

  data && console.log(data)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!</Text>
  if (!data) return null

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
  background-color: ${Colors.background3};
  flex: 1;
  padding-top: 35px;
`;

