import { colors } from '@/app/_utils/colors';

const styles = {
    completedChip: {
        padding: '10px 10px',
        color: colors.blue_primary,
        backgroundColor: colors.blue_secondary,
        textAlign: 'center',
        borderRadius: '23px',
    },
    pendingChip: {
        padding: '10px 10px',
        color: colors.green_primary,
        backgroundColor: colors.green_secondary,
        textAlign: 'center',
        borderRadius: '23px',
    },
    cancelChip: {
        padding: '10px 10px',
        color: colors.red_primary,
        backgroundColor: colors.red_secondary,
        textAlign: 'center',
        borderRadius: '23px',
    },
};

export default styles;
