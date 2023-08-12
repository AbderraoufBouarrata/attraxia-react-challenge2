import dotenv from 'dotenv';

dotenv.config({});

export const config = {
    API_URL: process.env.API_URL || 'http://localhost:3333',
};
