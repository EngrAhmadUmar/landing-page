import { gql } from "@apollo/client";

const APPLY_VISA = gql`
  mutation createVisaHolder(
    $passport_no: String!
    $passport_expiry: Date!
    $user: ID!
    $first_name: String!
    $last_name: String!
  ) {
    createVisaHolder(
      data: {
        passport_no: $passport_no
        passport_expiry: $passport_expiry
        user: $user
        first_name: $first_name
        last_name: $last_name
      }
    ) {
      data {
        id
      }
    }
  }
`;

export { APPLY_VISA };
