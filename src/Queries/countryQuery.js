import { gql } from "@apollo/client";
const GET_COUNTRIES = gql`
  query countries {
    availableCountries {
        data {
            attributes {
                name
                region
                
            }
        }
        
    }
}
    
`;

export { GET_COUNTRIES  };
