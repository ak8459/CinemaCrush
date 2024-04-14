import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjRhM2I1NDY0ZmM5M2MyYTgwNDk2NmE3MWE3NDQ5ZCIsInN1YiI6IjY2MWE4MjYyNWZmMzRlMDE2MzU5MTdiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NghgLqIZrSlIf4t6PHSxv__ihSEeTSaM2DNa01avphc'


const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};
 
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        // console.log(data)
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
