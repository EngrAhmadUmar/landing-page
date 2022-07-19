import React from "react";
import DestinationCard from "./DestinationCard";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import gorillaLake from "../../../public/sample-pic.jpeg";
import fazhenda from "../../../public/fazhenda.jpg";
import gorilla from "../../../public/gorilla.jpg";
import akagera from "../../../public/akagera.jpg";
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

// componentDidMount, ComponentDidUpdate, ComponentDIdRemove

const FeaturedDestinations = () => {
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
      <div className="mt-[1rem] max-w-[90vw]">
        <div className="">
          <h3 className="text-3xl lg:text-4xl mt-[7rem] text-[#418D89] font-semibold">
            Explore featured destinations
          </h3>
        </div>
        <p className="mt-3 md:mt-4 text-center px-2 text-xl leading-loose ml-2 md:text-2xl md:leading-relaxed ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
          ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero
          ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?
        </p>

        <div className="grid grid-cols-1 p-2 gap-12 mt-[4rem] md:grid-cols-2 lg:grid-cols-3 ">
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
          <Link href="#">
            <a className="px-10 text-lg md:text-xl lg:text-2xl">View more</a>
          </Link>
        </button>
        {/* We will uncomment this one just a litle bit later when we have the content for that page */}

        {/* <button className="bg-[#418d89] py-2 rounded-lg mt-8 mb-3">
          <Link href="#">
            <a className="px-8 py-1 text-lg md:text-2xl">see more</a>
          </Link>
        </button> */}
      </div>
    </div>
  );
};

// let destinations = [
//   {
//     title: "Gorilla Lake in Gisenyi",
//     image: "/sample-pic.jpeg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?",
//   },
//   {
//     title: "Akagera National Park",
//     image: "/akagera.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?",
//   },
//   {
//     title: "Fazhenda Sengha",
//     image: "/fazhenda.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?",
//   },
//   {
//     title: "Gorilla Nest",
//     image: "/gorilla.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?",
//   },
//   {
//     title: "Gorilla Nest",
//     image: "/gorilla.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?",
//   },
//   {
//     title: "Gorilla Nest",
//     image: "/gorilla.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?",
//   },
// ];

export default FeaturedDestinations;
