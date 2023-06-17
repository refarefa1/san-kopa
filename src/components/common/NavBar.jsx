import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { primaryColor } from '../../global/Colors';

const styles = {
    navbarContainer: {
        height: 72,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: `3px solid ${primaryColor}`,
        borderRadius: 0
    },
    navbar: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        height: '100%',
        '&.Mui-selected': {
            color: primaryColor
        }
    }
}

export const NavBar = (props) => {

    const { items } = props

    const [value, setValue] = useState(0);

    const setNewValue = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Paper sx={styles.navbarContainer} elevation={20} >
            <BottomNavigation
                sx={styles.navbar}
                showLabels
                value={value}
                onChange={setNewValue}
            >
                {items.map((item, idx) =>
                    <BottomNavigationAction sx={styles.item} key={idx} label={item.label} icon={item.icon} />
                )}
            </BottomNavigation>
        </Paper>
    );
}