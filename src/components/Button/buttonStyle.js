const styles = () => ({
    iconContainer: {
        width: 120,
        height: 120,
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '10px',
        border: '1px solid #999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBF5F5',
        // backgroundImage: 'linear-gradient(to top right, #00A8E8, #3CC0F3)',
        overflow: 'hidden',
        '& .triangle': {
            display: 'none',
            borderBottom: '50px solid #00A8E8',
            borderRight: '60px solid transparent',
            position: 'absolute',
            left: 0,
            bottom: 0
        },
        '&.active': {
            backgroundImage: 'linear-gradient(to top, #00A4EA, #18B8F1 40%)',
            '& .triangle': {
                display: 'block'
            }
        },
        '&:hover': {
            backgroundImage: 'linear-gradient(to top, #00A4EA, #18B8F1 40%)',
            '& .triangle': {
                display: 'block'
            }
        },
        '& img': {
            width: 60,
            height: 60
        }
    }
});

export default styles;
