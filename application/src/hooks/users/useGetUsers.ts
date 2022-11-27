import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query usersQuery {
        movies {
            id
            name
            genre
        }
    }
`;
