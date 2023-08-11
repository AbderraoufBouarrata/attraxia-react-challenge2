'use client';
import Logo from '@/app/_assets/images/logo.png';
import Copyright from '@/app/_components/Copyright/Copyright';
import CustomButton from '@/app/_components/CustomButton/CustomButton';
import CustomInput from '@/app/_components/CustomInput/CustomInput';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { handleSubmit } from './Sign.helpers';
import SignInStyles from './SignIn.styles';

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUp() {
    return (
        <Grid container component="main" sx={SignInStyles.mainContainer}>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={SignInStyles.formContainer}>
                    <Image src={Logo} alt="Logo" quality={100} />

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <CustomInput
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            placeholder="Email Address*"
                            name="email"
                            autoComplete="email"
                            type="email"
                            autoFocus
                        />
                        <CustomInput
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            placeholder="Name (Optional)"
                            name="name"
                            autoComplete="text"
                            autoFocus
                        />
                        <CustomInput
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            placeholder="Password*"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <CustomInput
                            margin="normal"
                            required
                            fullWidth
                            name="passwordConfirm"
                            placeholder="Confirm Password*"
                            type="password"
                            id="passwordConfirm"
                            autoComplete="current-password"
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <CustomButton type="submit" fullWidth variant="contained" sx={SignInStyles.button}>
                            Sign Up
                        </CustomButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    {'Already Have an account? Sign In'}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={SignInStyles.copyright} />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={false} sm={4} md={7} sx={SignInStyles.backgroundContainer} />
        </Grid>
    );
}
