import axios from 'axios';

export const API = axios.create({
    baseURL: `https://dobin-finance.ts.r.appspot.com/api`
});