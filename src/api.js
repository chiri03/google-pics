import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 7bs8xgkiRPSU8qEgkEv27Hs7N7i1brUstdl4AHtMeU0'
        },
        params: {
            query: term,
        }
    });


    return response.data.results;
};

export default searchImages;