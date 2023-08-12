'use client';
import CustomAvatar from '@/app/_components/CustomAvatar/CustomAvatar';
import CustomButton from '@/app/_components/CustomButton/CustomButton';
import { Grid, Paper, Typography } from '@mui/material';
import { styles } from './ProfileInvoices.styles';
import { ProfileInvoicesProps } from './ProfileInvoices.types';
import { generateInvoices } from './ProfileInvoices.helpers';
import useFetchInvoices from '@/app/_hooks/useFetchInvoices/useFetchInvoices';

export default function ProfileInvoices(props: ProfileInvoicesProps) {
    const { user } = props;
    const { invoices } = useFetchInvoices({ userId: parseInt(user.id) });
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
                <CustomButton sx={styles.button} onClick={() => generateInvoices(parseInt(user.id))}>
                    Generate Mock Data x10
                </CustomButton>
            </Grid>
        </Grid>
    );
}
