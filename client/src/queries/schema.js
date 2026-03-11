// const axios = require("axios");
// const {
//   GraphQLObjectType,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLBoolean,
//   GraphQLList,
//   GraphQLSchema,
// } = require("graphql");
import { gql } from "@apollo/client";

export const Get_Launches = gql`
  query GetLaunches($offset: Int, $limit: Int) {
    launches(offset: $offset, limit: $limit) {
      mission_name
      launch_year
      launch_success
      launch_site {
        site_name_long
        __typename
      }
      rocket {
        rocket_name
        rocket_type
        __typename
      }
      launch_date_local
      __typename
      flight_number
      details
      links {
        mission_patch
        __typename
      }
    }
  }
`;
// export const GetLaunches = gql`
//   query GetLaunches {
//     launches {
//       flight_number
//       mission_name
//       launch_year
//       launch_date_local
//       launch_success
//       details
//       rocket
//       links
//       launch_site
//     }
//   }
// `;

// const RocketType = new GraphQLObjectType({
//   name: "Rocket",
//   fields: () => ({
//     rocket_id: { type: GraphQLString },
//     rocket_name: { type: GraphQLString },
//     rocket_type: { type: GraphQLString },
//   }),
// });

// const LinkType = new GraphQLObjectType({
//   name: "Link",
//   fields: () => ({
//     mission_patch: { type: GraphQLString },
//   }),
// });

// const LaunchSiteType = new GraphQLObjectType({
//   name: "LaunchSite",
//   fields: () => ({
//     site_name_long: { type: GraphQLString },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     launches: {
//       type: new GraphQLList(LaunchType),
//       resolve(parent, args) {
//         return axios
//           .get("https://api.spacexdata.com/v3/launches")
//           .then((res) => res.data);
//       },
//     },
//     launch: {
//       type: LaunchType,
//       args: {
//         flight_number: { type: GraphQLInt },
//       },
//       resolve(parent, args) {
//         return axios
//           .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
//           .then((res) => res.data);
//       },
//     },
//     rockets: {
//       type: new GraphQLList(RocketType),
//       resolve(parent, args) {
//         return axios
//           .get("https://api.spacexdata.com/v3/rockets")
//           .then((res) => res.data);
//       },
//     },
//     rocket: {
//       type: RocketType,
//       args: {
//         flight_number: { type: GraphQLInt },
//       },
//       resolve(parent, args) {
//         return axios
//           .get(`https://api.spacexdata.com/v3/rockets/${args.flight_number}`)
//           .then((res) => res.data);
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({
//   query: RootQuery,
// });
