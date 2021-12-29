import { Text, FlatList } from 'react-native';
import * as React from 'react';
import RoomItem from '../components/RoomItem/RoomItem';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../apollo/queries';
import { Background, Wrapper } from './RoomsScreen.style';

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
