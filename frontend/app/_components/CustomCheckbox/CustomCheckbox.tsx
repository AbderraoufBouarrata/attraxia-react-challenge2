import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Image from 'next/image';
import StarGrey from '@/app/_assets/icons/Star-Grey.svg';
import StarYellow from '@/app/_assets/icons/Star-Yellow.svg';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckbox() {
    return (
        <Checkbox
            {...label}
            icon={<Image src={StarGrey} alt="star-grey" height={24} width={24} />}
            checkedIcon={<Image src={StarYellow} alt="star-yellow" height={24} width={24} />}
        />
    );
}
