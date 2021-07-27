import React from 'react';

// core components
import Typography from 'components/Typography';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './buttonStyle';

const Button = ({ selected, onSelect, icon, classes, label }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Box
                onClick={onSelect}
                className={`${classes.iconContainer} ${
                    selected ? 'active' : ''
                }`}>
                {icon && <img src={icon} alt="icon" />}
                <Box className="triangle"></Box>
            </Box>
            <Box p={1}>
                <Typography
                    variant="h3"
                    color={selected ? 'black' : 'gray'}
                    align="center"
                    fontSize="15px"
                    lineHeight="17px"
                    fontWeight={700}>
                    {label}
                </Typography>
            </Box>
        </Box>
    );
};

export default withStyles(styles)(Button);
