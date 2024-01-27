// src/services/newsService.js
import axios from 'axios';

const API_KEY = '31d98ad48a994799a47a3cf27591126d';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const COUNTRY_CODE = 'in'; // You can change it based on your requirements

export const getNews1 = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?country=${COUNTRY_CODE}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};