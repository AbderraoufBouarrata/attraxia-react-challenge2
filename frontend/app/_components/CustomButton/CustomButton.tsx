import { colors } from '@/app/_utils/colors';
import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';

type CustomButtonProps = ButtonProps & {
    children: React.ReactNode;
};

const CustomizedButton = styled(Button)({
    backgroundColor: colors.blue_primary,
    fontWeight: 500,
    fontSize: '16px',
    borderRadius: '10px',
    padding: '30px 0px',
    '&:hover': {
        backgroundColor: colors.blue_primary,
    },
});

export default function CustomButton(Props: CustomButtonProps) {
    const { children, ...rest } = Props;

    return <CustomizedButton {...rest}>{children}</CustomizedButton>;
}
