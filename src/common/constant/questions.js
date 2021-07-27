import { base_url } from 'common/constant';

const questions = {
    0: {
        0: {
            products: ['B08XB1DL1W', 'B08KGZ79N6', 'B091D6F3JP']
        },
        1: {
            products: ['B08PL38TT2', 'B08VX1HLVF', 'B08B7NYZCM']
        },
        2: {
            products: ['B0849P8D69', 'B08BX9CJC2', 'B08R1615DP']
        }
    },
    1: {
        0: {
            products: ['B08HJTN8PH', 'B091D6F3JP', 'B091D5QNTT']
        },
        1: {
            products: ['B088MGQFS7', 'B095PXZXHG', 'B0961H4GH7']
        },
        2: {
            products: ['B08KHD3HSZ', 'B08P2DDD55', 'B08BX9CJC2']
        }
    },
    2: {
        0: {
            products: ['B08KGZ79N6', 'B08KGYDR16', 'B091DBY1JT']
        },
        1: {
            products: ['B08JVMGZ8Y', 'B08C9P9VF5', 'B089K5J3PT']
        },
        2: {
            products: ['B08KHD3HSZ', 'B08JVMT8Y9', 'B08R1615DP']
        }
    },
    3: {
        0: {
            products: ['B08YKBYP62', 'B08Y581ZCN', 'B0888SQHS6']
        },
        1: {
            products: ['B08JVMT8Y9', 'B08JVMT8Y9', 'B08JVLYJKY']
        },
        2: {
            products: ['B0849P8D69', 'B08BX9CJC2', 'B08R1615DP']
        }
    },
    4: {
        0: {
            products: ['B096L4MCFK', 'B097F6FZTS']
        },
        1: {
            products: ['B08NCFRFFD', 'B08KHD3Q5Z']
        },
        2: {
            products: []
        }
    }
};

export const getAsins = (path) => {
    return questions[path[0]][path[1]].products;
};
export default questions;
