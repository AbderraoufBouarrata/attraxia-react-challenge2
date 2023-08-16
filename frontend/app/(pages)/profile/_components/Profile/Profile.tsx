'use client';
import CustomAvatar from '@/app/_components/CustomAvatar/CustomAvatar';
import CustomButton from '@/app/_components/CustomButton/CustomButton';
import { Grid } from '@mui/material';
import { styles } from './Profile.styles';
import { ProfileProps } from './Profile.types';
import Link from 'next/link';

export default function Profile(props: ProfileProps) {
    const { user } = props;

    return (
        <Grid container sx={styles.mainContainer}>
            <Grid sx={styles.alignCenter} item xs={12}>
                <CustomAvatar sx={styles.avatar} name={user.name || 'Testing User'} />
            </Grid>
            <Grid sx={styles.alignCenter} item xs={12}>
                {user.name || 'unnamed user'}
            </Grid>
            <Grid sx={styles.alignCenter} item xs={12}>
                {user.email}
            </Grid>
            <Grid sx={styles.alignCenter} item xs={12}>
                <Link style={styles.link} href="/invoice">
                    <CustomButton sx={styles.button}>Invoices</CustomButton>
                </Link>
            </Grid>
        </Grid>
    );
}
