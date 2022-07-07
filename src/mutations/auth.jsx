import { gql } from "@apollo/client";

const SIGNUP_MUTATION = gql`
  mutation  register($username: String!, $password: String!, $email:String!) {
    register(input: {username:$username, email: $email password:$password}) {
        jwt
        user {
            id
            email
            username
        }
    }
}
  
`;

const LOGIN_MUTATION = gql`
  mutation  login($username: String!, $password: String!) {
    login(input: {identifier:$username, password:$password}) {
        jwt
        user {
            id
            email
        }
    }
}
    
`;


export { SIGNUP_MUTATION, LOGIN_MUTATION };