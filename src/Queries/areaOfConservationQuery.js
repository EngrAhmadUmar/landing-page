import { gql } from "@apollo/client";
const GET_AREAS_OF_CONSERVATION = gql`
  query conservationAreas {
    conservationAreas {
      data {
        id
        attributes {
          title

          short_description
          country {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_AREAS_OF_CONSERVATION };
