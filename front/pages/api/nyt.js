// https://developer.nytimes.com/
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

import { NYT_API } from '../../.env.js';

export const fetchNYTBooksOverview = async () => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${NYT_API}`,
    );
  } catch (err) {
    console.error(err);
  }
};
