'use client';
import CustomAvatar from '@/app/_components/CustomAvatar/CustomAvatar';
import CustomButton from '@/app/_components/CustomButton/CustomButton';
import { Grid, Paper, Typography } from '@mui/material';
import { styles } from './ProfileInvoices.styles';
import { ProfileInvoicesProps } from './ProfileInvoices.types';
import { generateInvoices } from './ProfileInvoices.helpers';
import useFetchInvoices from '@/app/_hooks/useFetchInvoices/useFetchInvoices';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/_redux/store';

export default function ProfileInvoices(props: ProfileInvoicesProps) {
    const { user } = props;
    const { loading } = useFetchInvoices({ userId: user.id });
    const { invoices } = useSelector((state: RootState) => state.invoice);

    if (loading) return <div>Loading</div>;
    return (
        <Grid container sx={styles.mainContainer} rowGap={2}>
            <Grid sx={styles.alignCenter} item xs={12}>
                {/* @ts-ignore its not a property */}
                Your Invoices: {invoices.length}
            </Grid>
            <Grid sx={styles.alignCenter} item xs={12}>
                <Paper elevation={3} style={{ padding: '1rem' }}>
                    <Typography variant="h6" gutterBottom>
                        {JSON.stringify(invoices)}
                    </Typography>
                </Paper>
            </Grid>
            <Grid sx={styles.alignCenter} item xs={12}>
                {/* TODO */}
                <CustomButton sx={styles.button} onClick={() => generateInvoices(user.id)}>
                    Generate Mock Data x10
                </CustomButton>
            </Grid>
        </Grid>
    );
}
