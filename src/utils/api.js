import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWUyYmQ5ODM3YmVhYzI1OTRiNWFkMzg4ZTNiOTlkMCIsIm5iZiI6MTcyNDc3NDIzMy4xNTU1LCJzdWIiOiI2NmNkZjZhMWFlODhjNzU3NDg5ZGIzNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xMIqs8Y33NKeITkmmdQsMVJpHIETGKzao8QkFsUinYE";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};