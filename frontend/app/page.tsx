import Image from 'next/image';
import styles from './page.module.css';
import { Box } from '@mui/material';
import dotenv from 'dotenv';

dotenv.config({});
export default function Home() {
    return <Box>api at {process.env.API_URL}</Box>;
}
