import axios from "axios";
//require('dotenv').config();
// const REACT_APP_RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;
// console.log(REACT_APP_RAPID_API_KEY);

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

//const options = {
//     url: BASE_URL,
//     params: {
//       maxResults: '50'
//     },
//     headers: {
//        'x-rapidapi-key': 'd30dc6baefmsh53a52d60e3cb3dbp142ba7jsne240f41d6445',
//       'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
export const fetchFromAPI = async (url) => {
    try {
        const {data} = await axios.get(`${BASE_URL}${url}`,{
            params:{
                maxResults:'50',
            },
            headers: {
                'x-rapidapi-key': 'd30dc6baefmsh53a52d60e3cb3dbp142ba7jsne240f41d6445',
               'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
             }
        });
        //console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
