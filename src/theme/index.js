import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import palette from './palette';

const defaultTheme = createMuiTheme();
const { breakpoints } = defaultTheme;

const Theme = createMuiTheme({
    typography,
    palette,
    props: {
        MuiButton: {
            variant: 'contained'
        }
    },
    overrides: {
        MuiStepConnector: {
            root: {
                left: 'calc(-50% + 40px) !important',
                right: 'calc(50% + 40px) !important',
                top: '25px !important'
            }
        },
        MuiStepLabel: {
            root: {
                textTransform: 'uppercase'
            },
            active: {
                color: 'rgb(0, 171, 236) !important'
            }
        },
        MuiStepIcon: {
            active: {
                color: 'rgb(0, 171, 236) !important'
            }
        },
        MuiSvgIcon: {
            root: {
                fontSize: '50px !important',
                '& text': {
                    fontSize: '0.5rem'
                }
            }
        },
        MuiTypography: {
            h1: {
                fontSize: '5rem',
                [breakpoints.down('xs')]: {
                    fontSize: '3rem'
                },
                [breakpoints.down('xs')]: {
                    fontSize: '3rem'
                }
            }
        },
        MuiButton: {
            root: {
                borderRadius: '0px',
                '&::-moz-focus-inner': {
                    border: 0,
                    outline: 'none'
                }
            },
            label: {
                fontFamily: 'GothamMedium',
                fontSize: '18px'
            }
        }
    }
});

export default Theme;
