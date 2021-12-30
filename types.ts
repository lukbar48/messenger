import { StackNavigationProp } from '@react-navigation/stack';

export type RoomsScreenProp = StackNavigationProp<RootStackParamList, 'Rooms'>;
export type ChatScreenProp = StackNavigationProp<RootStackParamList, 'Chat'>;

export interface IRoom {
  id: string
  name: string
  __typename: string
}
export type RootStackParamList = {
  Chat: IRoomItem
  Rooms: undefined;
};
export interface IRoomItem {
  id: string
  messages: any
  name: string
  user: any
  __typename: string
}

export interface IRoomMessage {
  id: string;
  body: string;
  insertedAt: string;
  user: {
    id: string;
  };
}
