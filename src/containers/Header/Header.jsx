import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// styles
import styles from './headerStyles';

const heroVideoURL =
    'https://d24hosivsxf1sb.cloudfront.net/transcode/7fb04474-29b1-45a3-9e16-23ee406c5938/PC_Main%2Fmp4%2FPC_Main_high.mp4';

const Header = ({ classes }) => {
    return (
        <Box
            className={classes.wrapper}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <video
                muted
                className={classes.heroVideo}
                autoPlay="true"
                src={heroVideoURL}
            />
        </Box>
    );
};

export default withStyles(styles)(Header);
