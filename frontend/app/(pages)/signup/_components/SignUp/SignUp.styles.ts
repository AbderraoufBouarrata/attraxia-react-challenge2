import { colors } from '@/app/_utils/colors';

const SignInStyles = {
    mainContainer: {
        height: '100vh',
        '& .MuiPaper-root': {
            backgroundColor: colors.background,
        },
    },
    backgroundContainer: {
        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t: any) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    formContainer: {
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        mt: 3,
        mb: 2,
        height: '50px',
    },
    copyright: {
        mt: 5,
    },
};

export default SignInStyles;
