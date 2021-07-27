import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';

// jss
import styles from './heroStyle';

import { base_url } from 'common/constant';

const heroImage = `${base_url}/assets/images/footer-image.png`;

const Hero = ({ classes }) => {
    return (
        <Box className={classes.root}>
            <img src={heroImage} alt="hero" />
        </Box>
    );
};

export default withStyles(styles)(Hero);
