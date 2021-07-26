import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './buttonStyle';

const Button = ({ icon, classes }) => {
    const [selected, setSelected] = React.useState(false);

    const onSelect = () => {
        setSelected((prev) => !prev);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box
                onClick={onSelect}
                className={`${classes.iconContainer} ${
                    selected ? 'active' : ''
                }`}>
                {icon && <img src={icon} alt="icon" />}
                <Box className="triangle"></Box>
            </Box>
        </Box>
    );
};

export default withStyles(styles)(Button);
