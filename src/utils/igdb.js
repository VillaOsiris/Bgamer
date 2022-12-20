// import axios from "axios";

// const API_TOKEN_URL = "https://id.twitch.tv/oauth2/token?";
// const API_BASE_URL = "https://api.igdb.com/v4/games";
// const client_id = "h4de3ziebciskx0us1m647qqazshau";
// const client_secret = "&client_secret=zn6d1zipr27iet41ef8va78brb1men";

// const getToken = async () => {
//   const token = await axios.post(
//     `${API_TOKEN_URL}client_id=${client_id}${client_secret}&grant_type=client_credentials`
//   );
//   console.log(token.data.access_token);
//   return token.data.access_token;
// };

// export const dataFetch = axios({
//   url: "https://api.igdb.com/v4/games",
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Client-ID": client_id,
//     Authorization: `Bearer hnuhmhq5s8rmptmar7j46acov2zy90`,
//   },
//   data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;",
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// export default {
//   getMoviesList: async () => {
//     return [
//       {
//         slug: "trending",
//         title: "Trending",
//         items: await dataFetch("/trending/all/week"),
//       },
//       {
//         slug: "toprated",
//         title: "Top Rated",
//         items: await dataFetch("/movie/top_rated"),
//       },
//       {
//         slug: "action",
//         title: "Action",
//         items: await dataFetch("/discover/movie", "28"),
//       },
//       {
//         slug: "comedy",
//         title: "Comedy",
//         items: await dataFetch("/discover/movie", "35"),
//       },
//       {
//         slug: "horror",
//         title: "Horror",
//         items: await dataFetch("/discover/movie", "27"),
//       },
//       {
//         slug: "drama",
//         title: "Drama",
//         items: await dataFetch("/discover/movie", "10749"),
//       },
//     ];
//   },

//   getMovieInfo: async (movieId) => {
//     let info = await dataFetch(`/movie/${movieId}`);
//     return info;
//   },
// };
