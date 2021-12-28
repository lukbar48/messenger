import { gql } from "@apollo/client";

export const GET_USER = gql`
    query GetCurrentUser {
        user {
            id
            email
            firstName
            lastName
            role
        }
    }
`;

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
  query room($id: ID!) {
    room(id: $id) {
      id
      messages {
        id
        body
        insertedAt
        user {
          id
          firstName
          email
          lastName
          role
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