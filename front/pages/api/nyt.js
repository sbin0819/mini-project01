// https://developer.nytimes.com/
// import dotenv from 'dotenv';
// dotenv.config();

import { NYT_API } from '../../.env.js';

export const fetchAddr = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${NYT_API}`;

export const fetchArticles = `https://api.nytimes.com/svc/mostpopular/v2/shared/30.json?api-key=${NYT_API}`;
