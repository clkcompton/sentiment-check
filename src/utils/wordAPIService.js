import axios from 'axios';
// require('dotenv').config();
import dotenv from 'dotenv';


export default function fetchSynonym(word) {
  dotenv.config();
    var options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_WORD_API_KEY,
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
      }
    };
    const synList = axios.request(options).then(function (response) {
      console.log(response.data);
      return response;
    }).catch(function (error) {
      console.error(error);
    });

    return synList;
  }