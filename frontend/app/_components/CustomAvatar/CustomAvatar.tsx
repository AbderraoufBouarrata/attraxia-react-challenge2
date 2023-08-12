import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { stringToColor, stringAvatar } from './CustomAvatar.helpers';
import { CustomAvatarProps } from './CustomAvatar.types';

export default function CustomAvatar(props: CustomAvatarProps) {
    const { name, ...rest } = props;
    return <Avatar {...stringAvatar(name)} {...rest} />;
}
