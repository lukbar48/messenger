import { gql } from "@apollo/client";

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export const GET_ROOM_ITEM = gql`
  query room($roomId: String!) {
    room(id: $roomId) {
      id
      messages {
        id
        body
        insertedAt
        user {
          id
        }
      }
      name
      user {
        id
          firstName
          email
          lastName
          role
      }
    }
  }
`;