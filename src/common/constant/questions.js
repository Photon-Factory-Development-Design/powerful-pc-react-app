import { base_url } from 'common/constant';

const questions = {
    0: {
        0: {
            recommendedText:
                'Recommended for those who need to create on-the-go, anytime, anywhere and whenever inspiration strikes.',
            products: ['B08XB1DL1W', 'B08KGZ79N6', 'B091D6F3JP']
        },
        1: {
            recommendedText:
                'Recommended for those who need expanded storage, the latest processing power and tested reliability.',
            products: ['B08PL38TT2', 'B08VX1HLVF', 'B08B7NYZCM']
        },
        2: {
            recommendedText:
                'Recommended for those who want an efficient & easy desktop without the clutter.',
            products: ['B0849P8D69', 'B08BX9CJC2', 'B08R1615DP']
        }
    },
    1: {
        0: {
            recommendedText: 'Recommended for home, work & play',
            products: ['B08HJTN8PH', 'B091D6F3JP', 'B091D5QNTT']
        },
        1: {
            recommendedText:
                'Recommended for those who need to watch videos and work on projects easier and faster than ever.',
            products: ['B088MGQFS7', 'B095PXZXHG', 'B0961H4GH7']
        },
        2: {
            recommendedText:
                'Recommended for those who need a PC that can grow with you.',
            products: ['B08KHD3HSZ', 'B08P2DDD55', 'B08BX9CJC2']
        }
    },
    2: {
        0: {
            recommendedText:
                'Recommended for those who want to work, connect, & achieve more.',
            products: ['B08KGZ79N6', 'B08KGYDR16', 'B091DBY1JT']
        },
        1: {
            recommendedText:
                'Recommended for those who need power and performance to take on today’s workloads.',
            products: ['B08JVMGZ8Y', 'B08C9P9VF5', 'B089K5J3PT']
        },
        2: {
            recommendedText:
                'Recommended for those who need to power through their workdays.',
            products: ['B08KHD3HSZ', 'B08JVMT8Y9', 'B08R1615DP']
        }
    },
    3: {
        0: {
            recommendedText:
                'Recommended for those who need performance, power, and speed.',
            products: ['B08YKBYP62', 'B08Y581ZCN', 'B0888SQHS6']
        },
        1: {
            recommendedText:
                'Recommended for those who need PCs built to handle the workload',
            products: ['B08JVMT8Y9', 'B08JVMT8Y9', 'B08JVLYJKY']
        },
        2: {
            recommendedText:
                'Recommended for those who need to create and multitask faster than ever.',
            products: ['B0849P8D69', 'B08BX9CJC2', 'B08R1615DP']
        }
    },
    4: {
        0: {
            recommendedText:
                'Recommended for those who need high performance, instant responsiveness, and best-in-class connectivity.',

            products: ['B096L4MCFK', 'B097F6FZTS']
        },
        1: {
            recommendedText:
                'Recommended for those who need high speed performance, seamless expansion and easy upgrades to keep up with the games of tomorrow.',
            products: ['B08NCFRFFD', 'B08KHD3Q5Z']
        },
        2: {
            products: []
        }
    }
};

const accessories = {
    0: {
        good: ['B08VJDGK2H', 'B091BDVS8B', 'B08HZGWRB1', 'B08XYRDSL7'],
        best: ['B08NM2GF2V', 'B07QHV16PM', 'B08N5L99FW', 'B08XYRDKDV']
    },
    1: {
        good: ['B08ML8RTC8', 'B00501T8XY', 'B08N5L99FW', 'B08WC7YQM3'],
        best: ['B07F3N8GS7', 'B07FRCL9PD', 'B08HZGWRB1', 'B08WC8VD8G']
    },
    2: {
        good: ['B078436MT1', 'B091BDVS8B', 'B08N5L99FW', 'B08HJS5VX8'],
        best: ['B08MTP3236', 'B07XLGBG1K', 'B08HZG45BR', 'B01B1JFSK0']
    },
    3: {
        good: ['B08MTP3236', 'B091BDVS8B', 'B08N5L99FW', 'B08TM7PJ55'],
        best: ['B08YP5L1TC', 'B07XLGBG1K', 'B08HZGWRB1', 'B07XGNLFJC']
    },
    4: {
        good: ['B08N6Y1NBQ', 'B091BDVS8B', 'B08HZG45BR', 'B07T435VJW'],
        best: ['B07T435VJW', 'B07XLGBG1K', 'B08HZGWRB1', 'B08HZGWRB1']
    }
};

export const getAsins = (path) => {
    console.log(path);
    return questions[path[0]][path[1]].products;
};

export const getRecommendedText = path => {
    if (!path || path.length !== 2) {
        return 'RECOMMENDED FOR YOU';
    } else {
        return questions[path[0]][path[1]].recommendedText;
    }
}

export const getGoodAccessoryAsins = path => {
    return accessories[path[0]].good;
}
export const getBestAccessoryAsins = (path) => {
    return accessories[path[0]].best;
};

export const getAccessories = (path) => {
    return accessories[path[0][path[1]]];
};
export default questions;
