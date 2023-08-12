'use client';
import CustomButton from '@/app/_components/CustomButton/CustomButton';
import CustomInput from '@/app/_components/CustomInput/CustomInput';
import { Grid, Typography } from '@mui/material';
import { styles } from './ProfileDetails.styles';
import { ProfileDetailsProps } from './ProfileDetails.types';
import { useState } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import { handleSubmit } from './ProfileDetails.helpers';
// @ts-ignore this has no TS support yet
import { DateTime } from 'luxon';

export default function ProfileDetails(props: ProfileDetailsProps) {
    const { user } = props;

    const [isEditingMode, setIsEditingMode] = useState(true);
    const createdAt = DateTime.fromISO(user.createdAt);
    const updatedAt = DateTime.fromISO(user.updatedAt);

    return (
        <Grid container sx={styles.mainContainer} rowGap={4} component="form" onSubmit={handleSubmit}>
            <Grid item xs={12}>
                <Typography variant="h6">General Info:</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom component="div">
                    Your Name:
                </Typography>
                <CustomInput name="name" sx={styles.input} placeholder={user.name || 'unnamed'} disabled={isEditingMode} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom component="div">
                    Your Email:
                </Typography>
                <CustomInput name="email" sx={styles.input} placeholder={user.email} disabled={isEditingMode} />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom component="div">
                    Created at:
                </Typography>
                <CustomInput sx={styles.input} placeholder={createdAt.toLocaleString(DateTime.DATETIME_MED)} disabled={true} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom component="div">
                    Last Updated at:
                </Typography>
                <CustomInput sx={styles.input} placeholder={updatedAt.toLocaleString(DateTime.DATETIME_MED)} disabled={true} />
            </Grid>
            <Grid sx={styles.alignCenter} item xs={12}>
                <CustomButton sx={styles.button} onClick={() => setIsEditingMode(!isEditingMode)}>
                    <EditRoundedIcon /> Edit
                </CustomButton>
                <CustomButton type="submit" sx={styles.button}>
                    <SaveRoundedIcon />
                    Submit
                </CustomButton>
            </Grid>
        </Grid>
    );
}
