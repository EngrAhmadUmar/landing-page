import React from "react";
import DestinationCard from "./DestinationCard";
import { useQuery, gql } from "@apollo/client";
import gorillaLake from "../../../public/sample-pic.jpeg";
import fazhenda from "../../../public/fazhenda.jpg";
import gorilla from "../../../public/gorilla.jpg";
import akagera from "../../../public/akagera.jpg";

// const featuredDestinations = gql`
//   query GetfeaturedDestinations {
//     featuredDestinations {
//       data {
//         id
//         attributes {
//           title
//           short_description
//         }
//       }
//     }
//   }
// `;

// componentDidMount, ComponentDidUpdate, ComponentDIdRemove

const FeaturedDestinations = () => {
  // try {
  //   const { loading, error, data } = useQuery(featuredDestinations);
  //   if (loading) return <p>Loading...</p>;
  //   if (error) {
  //     console.log("couldn't fetch");
  //     console.log(error);
  //   } else {
  //     destinations = data.featuredDestinations.data;
  //   }
  // } catch (error) {
  //   console.log("couldn't fetch");
  //   console.log(error);
  // }

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
              <DestinationCard
                title={destination.title}
                image={destination.image}
                short_description={destination.short_description}
              />
            );
          })}
        </div>
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

let destinations = [
  {
    title: "Gorilla Lake in Gisenyi",
    image: "/sample-pic.jpeg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  },
  {
    title: "Akagera National Park",
    image: "/akagera.jpg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  },
  {
    title: "Fazhenda Sengha",
    image: "/fazhenda.jpg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  },
  {
    title: "Gorilla Nest",
    image: "/gorilla.jpg",
    short_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
  }
];

export default FeaturedDestinations;
