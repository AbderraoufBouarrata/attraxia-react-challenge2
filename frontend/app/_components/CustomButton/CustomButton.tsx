import { colors } from '@/app/_utils/colors';
import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';

type CustomButtonProps = ButtonProps & {
    children: React.ReactNode;
};

const CustomizedButton = styled(Button)({
    color: 'white',
    backgroundColor: colors.blue_primary,
    fontWeight: 500,
    fontSize: '14px',
    borderRadius: '10px',
    padding: '25px 0px',
    '&:hover': {
        backgroundColor: colors.blue_primary,
    },
});

export default function CustomButton(Props: CustomButtonProps) {
    const { children, ...rest } = Props;

    return <CustomizedButton {...rest}>{children}</CustomizedButton>;
}
