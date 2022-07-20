import { gql } from "@apollo/client";

const APPLY_VISA = gql`
  mutation createVisaHolder(
    $passport_no: String!
    $passport_expiry: Date!
    $user: ID!
 
    $conservation_areas: [ID!]
  ) {
    createVisaHolder(
      data: {
        passport_no: $passport_no
        passport_expiry: $passport_expiry
        user: $user
   
        conservation_areas: $conservation_areas
      }
    ) {
      data {
        id
        attributes {
         
          passport_no
          
        }
      }
    }
  }
`;

export { APPLY_VISA };
