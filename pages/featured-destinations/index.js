import React from "react";
import DestinationCard from "../../src/components/MainPageComponents/DestinationCard";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
// import gorillaLake from "../../../public/sample-pic.jpeg";
import fazhenda from "../../public/fazhenda.jpg";
import { Footer } from "../../src/Components/MainPageComponents";
// import gorilla from "../../../public/gorilla.jpg";
// import akagera from "../../../public/akagera.jpg";
// import destinationPic from "../../../public/sample-pic.jpeg";

const GET_FEATURED_DESTINATIONS = gql`
  query GetfeaturedDestinations {
    futureDestinations {
      data {
        id
        attributes {
          title
          short_description
        }
      }
    }
  }
`;

// https://stackoverflow.com/questions/70713719/react-hook-usequery-is-called-conditionally-react-hooks-must-be-called-in-the

const FeaturedDestinationsList = () => {
  const { loading, error, data } = useQuery(GET_FEATURED_DESTINATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Couldn't fetch</p>;
  }

  console.log(data);
  const destinations = data.futureDestinations.data;
  console.log(destinations);

  return (
    <div className="bg-[#faf9f6] font-syne flex justify-center text-center">
      <div className=" ">
        <div className="pt-[7rem]">
          <h3 className="text-3xl lg:text-4xl text-[#418D89] font-semibold">
            Explore featured destinations
          </h3>
        </div>
        <p className="mt-10 text-center px-2 text-xl leading-loose mx-2 md:text-2xl md:leading-relaxed lg:px-[10rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
          ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero
          ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?
        </p>

        <div className="grid grid-cols-1 p-2 gap-12 mt-16 md:grid-cols-2 lg:grid-cols-3 lg:px-[10rem]">
          {destinations.map((destination) => {
            return (

              <Link
                href={{
                  pathname: "/featured-destinations/[id]",
                  query: { id: destination.id },
                }}
                // href={'/featured-destinations/' + destination.id}
                key={destination.id}
              >
                <div>
                  <DestinationCard
                    title={destination.attributes.title}
                    image={fazhenda}
                    short_description={destination.attributes.short_description}
                  />
                </div>
              </Link>
            );
          })}
        </div>
          
        <button className="bg-[#418d89] py-2 rounded-lg mt-8 mb-3">
          <Link href="/">
            <a className="px-10 text-lg md:text-xl lg:text-2xl">Go back Home</a>
          </Link>
        </button>
        <Footer/>
      </div>
      
    </div>
  );
};


export default FeaturedDestinationsList;
