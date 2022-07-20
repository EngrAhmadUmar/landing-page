import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";
import { Footer } from "../../src/Components/MainPageComponents";

const GET_AREAS_OF_CONSERVATION = gql`
  query ($id: ID!) {
    conservationArea(id: $id) {
      data {
        id
        attributes {
          title
          short_description
          long_description
          country_id {
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

const ConservationAreaDetails = () => {
  const router = useRouter();
  console.log(router.query);
  const id = parseInt(router.query.id);
  console.log("id", id);

  const { loading, error, data } = useQuery(GET_AREAS_OF_CONSERVATION, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Couldn't fetch</p>;
  }
  console.log(data);
  // console.log('data', data.futureDestination.data.attributes.title)
  const area = data.conservationArea.data;
  // console.log(destination)
  console.log(area.attributes.country_id.data);

  return (
    <div className="bg-[#faf9f6]">
      <div className="pt-[4rem] px-6 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 px-6">
          <Image
            className="rounded"
            // layout="fill"
            // objectFit="cover"
            width="500px"
            height="500px"
            src="/an2.svg"
          />
        </div>
        <h2 className="text-center text-3xl lg:text-4xl text-[#418D89] font-bold mt-8 ">
          {area.attributes.title}
        </h2>
        <div className="flex space-x-4 justify-center">
          <p className="text-center text-1xl lg:text-2xl text-[#000] font-bold mt-8">
            Countries:
          </p>
          {area.attributes.country_id.data.map((c) => (
            <p className="text-center text-1xl lg:text-2xl text-[#000] font-bold mt-8">
              {c.attributes.name}
            </p>
          ))}
        </div>

        <p className="mt-3 md:mt-4 text-justify px-2 text-xl leading-loose ml-2 md:text-2xl md:leading-relaxed lg:px-[10rem]">
          {area.attributes.long_description}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ConservationAreaDetails;
