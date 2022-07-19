// import { GET_AREAS_OF_CONSERVATION } from "../../src/Queries/conservationAreas";
import { gql, ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import { Footer } from "../../src/Components/MainPageComponents";

const GET_FEATURED_DESTINATION = gql`
  query($id: ID!){
        futureDestination(id: $id) {
            data{
                id 
                attributes{
                    title
                    short_description
                    long_description
                    country{
                      data{
                        id
                        attributes{
                          name
                        }
                      }
                    }
                }
            }
        }
    }
`;

const FeaturedDestinationDetails = () => {
  const router = useRouter();
  console.log(router.query);
  const id = parseInt(router.query.id);
  console.log("id", id);

  const { loading, error, data } = useQuery(GET_FEATURED_DESTINATION, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>
  if (error) {
      console.log(error)
      return <p>Couldn't fetch</p>
  }
  console.log('data',data);
  // console.log('data', data.futureDestination.data.attributes.title)
  const destination = data.futureDestination.data;
  console.log('destination', destination)

  return (
    <div className="bg-[#faf9f6]">
      <div className="pt-[4rem] ">
        <div className="grid grid-cols-1 px-6">
          <Image
            className="rounded"
            // layout="fill"
            // objectFit="cover"
            width="500px"
            height="500px"
            src="/an1.svg"
          />
        </div>
        <h2 className="text-center text-3xl lg:text-4xl text-[#418D89] font-bold mt-8">
          {destination.attributes.title}
        </h2>
        <p className="text-center text-1xl lg:text-2xl text-[#000] font-bold mt-8">Country: {destination.attributes.country.data.attributes.name}</p>
        <p className="mt-3 md:mt-4 text-justify px-2 text-xl leading-loose ml-2 md:text-2xl md:leading-relaxed lg:px-[10rem]">
          {destination.attributes.long_description}
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default FeaturedDestinationDetails;
