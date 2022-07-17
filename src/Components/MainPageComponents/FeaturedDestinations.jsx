// import React from "react";
// import DestinationCard from "./DestinationCard";
// import { useQuery, gql } from "@apollo/client";
// import gorillaLake from "../../../public/sample-pic.jpeg";
// import fazhenda from "../../../public/fazhenda.jpg";
// import gorilla from "../../../public/gorilla.jpg";
// import akagera from "../../../public/akagera.jpg";

// const featuredDestinations = gql`
//   query GetfeaturedDestinations {
//     futureDestinations {
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

// // https://stackoverflow.com/questions/70713719/react-hook-usequery-is-called-conditionally-react-hooks-must-be-called-in-the

// const FeaturedDestinations = () => {
// //   try {
// //     const { loading, error, data } = useQuery(featuredDestinations);
// //     if (loading) return <p>Loading...</p>;
// //     if (error) {
// //       console.log("couldn't fetch");
// //       console.log(error);
// //     } else {
// //       destinations = data.futureDestinations.data;
// //     }
// //   } catch (error) {
// //     console.log("couldn't fetch");
// //     console.log(error);
// //   }

//   return (
//     <div className="bg-[#faf9f6] font-syne flex justify-center text-center">
//       <div className=" ">
//         <div className="pt-[7rem]">
//           <h3 className="text-3xl lg:text-4xl text-[#418D89] font-semibold">
//             Explore featured destinations
//           </h3>
//         </div>
//         <p className="mt-10 text-center px-2 text-xl leading-loose mx-2 md:text-2xl md:leading-relaxed lg:px-[10rem]">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
//           ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero
//           ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?
//         </p>

//         <div className="grid grid-cols-1 p-2 gap-12 mt-16 md:grid-cols-2 lg:grid-cols-3 lg:px-[10rem]">
//           {destinations.map((destination) => {
//             return (
//               <DestinationCard
//                 key={destination.title}
//                 title={destination.title}
//                 image={destination.image}
//                 short_description={destination.short_description}
//               />
//             );
//           })}
//         </div>
//         {/* We will uncomment this one just a litle bit later when we have the content for that page */}

//         {/* <button className="bg-[#418d89] py-2 rounded-lg mt-8 mb-3">
//           <Link href="#">
//             <a className="px-8 py-1 text-lg md:text-2xl">see more</a>
//           </Link>
//         </button> */}
//       </div>
//     </div>
//   );
// };

// let destinations = [
//   {
//     title: "Kivu Lake in Gisenyi",
//     image: "/kivu-lake.jpeg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
//   },
//   {
//     title: "Akagera National Park",
//     image: "/akagera.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
//   },
//   {
//     title: "Fazhenda Sengha",
//     image: "/fazhenda.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
//   },
//   {
//     title: "Gorilla Nest",
//     image: "/gorilla.jpg",
//     short_description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam omnis. Minus cupiditate at sit suscipit aperiam earum libero ipsa! Quaerat natus architecto nostrum aut vero, illo fuga qui?"
//   }
// ];

// export default FeaturedDestinations;
