import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@/app/_assets/icons/Menu.svg';
import Image from 'next/image';
import { styles } from './CustomMenu.styles';
import Edit from '@/app/_assets/icons/Edit.svg';
import Delete from '@/app/_assets/icons/Delete-2.svg';
import { Stack } from '@mui/material';

export default function CustomMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Image
                src={MenuIcon}
                alt="menu"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={(e: any) => handleClick(e)}
                style={styles.menuIcon}
            />
            <Menu
                sx={styles.menu}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={styles.menuItemEdit}>
                    <Stack direction="row" gap="5px" alignItems="center">
                        <Image src={Edit} alt="edit" width={16} height={16} />
                        Edit
                    </Stack>
                </MenuItem>
                <MenuItem sx={styles.menuItemDelete}>
                    <Stack direction="row" gap="5px" alignItems="center">
                        <Image src={Delete} alt="delete" width={16} height={16} />
                        Delete
                    </Stack>
                </MenuItem>
            </Menu>
        </>
    );
}
